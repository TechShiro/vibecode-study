import os
import re
import json

base_dir = r"C:\Users\krish\OneDrive\문서\College"
interview_dir = os.path.join(base_dir, "Interview")
semester_dir = os.path.join(base_dir, "Semester")
output_json = os.path.join(base_dir, "agent", "mobile-app", "www", "data.json")

catalog = {
    "interview": [],
    "sem": []
}

def clean_text(html):
    text = re.sub(r'<[^>]+>', ' ', html)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def extract_lesson_info(file_path, mode, subject, subject_id, unit_name):
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception:
        return None

    # Title extraction
    title_match = re.search(r'<h1>(.*?)</h1>', content, re.IGNORECASE | re.DOTALL)
    if title_match:
        title = clean_text(title_match.group(1))
    else:
        title = os.path.basename(file_path).replace(".html", "").replace("-", " ").title()

    # Kicker / Deck extraction
    deck_match = re.search(r'class="(?:subtitle|deck)">(.*?)</p>', content, re.IGNORECASE | re.DOTALL)
    deck = clean_text(deck_match.group(1)) if deck_match else ""

    # "The One Idea" extraction
    one_idea_match = re.search(r'<h2>1\s*·\s*The One Idea</h2>\s*<p>(.*?)</p>', content, re.IGNORECASE | re.DOTALL)
    if not one_idea_match:
        one_idea_match = re.search(r'<h2>(?:1|2)\s*·\s*(?:The One Idea|Overview|Core).*?</h2>\s*<p>(.*?)</p>', content, re.IGNORECASE | re.DOTALL)
    
    if one_idea_match:
        one_idea = clean_text(one_idea_match.group(1))
    elif deck:
        one_idea = deck
    else:
        # Fallback to first paragraph
        p_match = re.search(r'<p>(.*?)</p>', content, re.IGNORECASE | re.DOTALL)
        one_idea = clean_text(p_match.group(1)) if p_match else "Master the foundational and practical concepts of this topic."

    # YouTube embed extraction
    yt_match = re.search(r'youtube(?:-nocookie)?\.com/embed/([a-zA-Z0-9_-]+)', content)
    yt_id = yt_match.group(1) if yt_match else ""

    # Key diagram or formula or code snippet for the Shorts Card
    diagram_match = re.search(r'(<div class="arch-flow".*?</div>)', content, re.IGNORECASE | re.DOTALL)
    if not diagram_match:
        diagram_match = re.search(r'(<table class="vs-table".*?</table>)', content, re.IGNORECASE | re.DOTALL)
    if not diagram_match:
        diagram_match = re.search(r'(<pre><code>.*?</code></pre>)', content, re.IGNORECASE | re.DOTALL)
    if not diagram_match:
        diagram_match = re.search(r'(<div class="box.*?</div>)', content, re.IGNORECASE | re.DOTALL)

    key_visual = diagram_match.group(1) if diagram_match else ""
    # Simplify key visual for Shorts card if too long
    if len(key_visual) > 1500:
        key_visual = key_visual[:1500] + "...</div>"

    lesson_id = f"{mode}_{subject_id}_{os.path.basename(file_path).replace('.html', '')}"

    return {
        "id": lesson_id,
        "mode": mode,
        "subject": subject,
        "subjectId": subject_id,
        "unit": unit_name,
        "title": title,
        "deck": deck,
        "oneIdea": one_idea[:300] + ("..." if len(one_idea) > 300 else ""),
        "keyVisual": key_visual,
        "ytVideo": yt_id,
        "fileName": os.path.basename(file_path),
        "filePath": os.path.relpath(file_path, base_dir).replace("\\", "/")
    }

# 1. Scan Interview Track
interview_subjects = [
    ("system-design", "System Design"),
    ("dsa", "Data Structures & Algorithms"),
    ("web-dev", "Web Development"),
    ("oops", "Object-Oriented Programming"),
    ("os", "Operating Systems"),
    ("dbms", "Database Systems"),
    ("ai-ml", "AI & Machine Learning"),
    ("cyber-security", "Cyber Security")
]

for sub_id, sub_name in interview_subjects:
    sub_path = os.path.join(interview_dir, sub_id)
    if not os.path.exists(sub_path):
        continue
    
    # Check for lessons dir
    lessons_path = os.path.join(sub_path, "lessons")
    if os.path.exists(lessons_path):
        for root, dirs, files in os.walk(lessons_path):
            unit_name = os.path.basename(root) if root != lessons_path else "Core Curriculum"
            for f in sorted(files):
                if f.endswith(".html"):
                    fp = os.path.join(root, f)
                    info = extract_lesson_info(fp, "interview", sub_name, sub_id, unit_name)
                    if info:
                        catalog["interview"].append(info)
    else:
        # e.g. DSA track folders
        for root, dirs, files in os.walk(sub_path):
            if "lessons" in root:
                unit_name = os.path.basename(root).replace("-lessons", "").replace("-", " ").title()
                for f in sorted(files):
                    if f.endswith(".html"):
                        fp = os.path.join(root, f)
                        info = extract_lesson_info(fp, "interview", sub_name, sub_id, unit_name)
                        if info:
                            catalog["interview"].append(info)

# 2. Scan Semester Track
sem_subjects = [
    ("iks", "Indian Knowledge Systems"),
    ("OS", "Operating Systems (Semester)"),
    ("Computer Networks", "Computer Networks"),
    ("Principle of Compiler Construction", "Compiler Design"),
    ("DAA", "Design & Analysis of Algorithms"),
    ("Soft Computing", "Soft Computing"),
    ("Info and Data Security", "Info & Data Security")
]

for sub_id, sub_name in sem_subjects:
    sub_path = os.path.join(semester_dir, sub_id)
    if not os.path.exists(sub_path):
        continue
    
    lessons_path = os.path.join(sub_path, "lessons")
    if os.path.exists(lessons_path):
        for root, dirs, files in os.walk(lessons_path):
            rel_unit = os.path.relpath(root, lessons_path)
            unit_name = rel_unit.replace("-", " ").title() if rel_unit != "." else "General"
            for f in sorted(files):
                if f.endswith(".html"):
                    fp = os.path.join(root, f)
                    info = extract_lesson_info(fp, "sem", sub_name, sub_id.lower().replace(" ", "-"), unit_name)
                    if info:
                        catalog["sem"].append(info)

# Save JSON
os.makedirs(os.path.dirname(output_json), exist_ok=True)
with open(output_json, "w", encoding="utf-8") as f:
    json.dump(catalog, f, indent=2, ensure_ascii=False)

print(f"Generated data.json successfully!")
print(f"Interview lessons compiled: {len(catalog['interview'])}")
print(f"Semester lessons compiled: {len(catalog['sem'])}")
print(f"Total searchable lessons in app: {len(catalog['interview']) + len(catalog['sem'])}")
