import os
import shutil

base_dir = r"C:\Users\krish\OneDrive\문서\College"
target_dir = os.path.join(base_dir, "agent", "mobile-app", "www", "content")
os.makedirs(target_dir, exist_ok=True)

# 1. Copy Interview Directory
src_interview = os.path.join(base_dir, "Interview")
dst_interview = os.path.join(target_dir, "Interview")
if os.path.exists(dst_interview):
    shutil.rmtree(dst_interview)
shutil.copytree(src_interview, dst_interview, ignore=shutil.ignore_patterns("*.py", "*.log", ".git*", ".agents", ".claude", "venv"))
print("Copied Interview tree to www/content/Interview")

# 2. Copy Semester Directory
src_semester = os.path.join(base_dir, "Semester")
dst_semester = os.path.join(target_dir, "Semester")
if os.path.exists(dst_semester):
    shutil.rmtree(dst_semester)
shutil.copytree(src_semester, dst_semester, ignore=shutil.ignore_patterns("*.py", "*.log", ".git*", ".agents", ".claude", "*.pdf", "*.docx", "*.txt", "ocr_extracted", "Mam Material"))
print("Copied Semester tree to www/content/Semester")

print("Content bundle completed successfully!")
