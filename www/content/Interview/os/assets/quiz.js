// Shared quiz widget for all lessons. Markup contract:
//
// <div class="quiz" data-answer="1">
//   <div class="q">Question text</div>
//   <button class="opt">Option A</button>
//   <button class="opt">Option B</button>   <!-- index 1 == correct -->
//   <button class="opt">Option C</button>
//   <div class="fb" data-correct="Why right" data-wrong="Nudge for wrong"></div>
// </div>
//
// Retrieval practice: immediate, automatic feedback (tight loop = storage strength).
// Answer indices are intentionally NOT revealed in formatting (all options equal length where possible).

document.addEventListener('click', function (e) {
  var btn = e.target.closest('.quiz button.opt');
  if (!btn) return;
  var quiz = btn.closest('.quiz');
  var opts = Array.prototype.slice.call(quiz.querySelectorAll('button.opt'));
  var answer = parseInt(quiz.getAttribute('data-answer'), 10);
  var chosen = opts.indexOf(btn);
  var fb = quiz.querySelector('.fb');

  opts.forEach(function (o, i) {
    o.classList.remove('correct', 'wrong');
    if (i === answer) o.classList.add('correct');
  });
  if (chosen !== answer) btn.classList.add('wrong');

  if (fb) {
    if (chosen === answer) {
      fb.textContent = '✓ ' + (fb.getAttribute('data-correct') || 'Correct.');
      fb.className = 'fb correct';
    } else {
      fb.textContent = '✗ ' + (fb.getAttribute('data-wrong') || 'Not quite — see the highlighted answer.');
      fb.className = 'fb wrong';
    }
  }
});
