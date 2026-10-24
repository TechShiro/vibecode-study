/* Shared retrieval-practice behaviour for every lesson in this workspace.
   Markup contract:
     <div class="q">
       <p class="stem">...</p>
       <div class="opts">
         <button class="opt" data-ok="1">correct</button>
         <button class="opt">distractor</button>
       </div>
       <p class="why">explanation shown after answering</p>
     </div>
   One shot per question: answering locks it, so you cannot fish for the answer. */

function shuffleOptions() {
  var containers = document.querySelectorAll('.opts');
  for (var i = 0; i < containers.length; i++) {
    var c = containers[i];
    if (c.dataset.shuffled) continue;
    c.dataset.shuffled = '1';
    var buttons = Array.prototype.slice.call(c.querySelectorAll('.opt'));
    for (var j = buttons.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var temp = buttons[j];
      buttons[j] = buttons[k];
      buttons[k] = temp;
    }
    for (var j = 0; j < buttons.length; j++) {
      c.appendChild(buttons[j]);
    }
  }
}

shuffleOptions();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', shuffleOptions);
}

document.addEventListener('click', function (e) {
  var btn = e.target.closest('.opt');
  if (!btn) return;
  var q = btn.closest('.q');
  if (!q || q.dataset.done) return;

  q.dataset.done = '1';
  var opts = q.querySelectorAll('.opt');
  for (var i = 0; i < opts.length; i++) {
    if (opts[i].dataset.ok === '1') opts[i].classList.add('right');
    else if (opts[i] === btn) opts[i].classList.add('wrong');
  }
  var why = q.querySelector('.why');
  if (why) why.classList.add('show');

  var quiz = q.closest('.quiz');
  if (quiz) score(quiz);
});

function score(quiz) {
  var all = quiz.querySelectorAll('.q');
  var done = quiz.querySelectorAll('.q[data-done]');
  if (all.length !== done.length) return;

  var right = 0;
  for (var i = 0; i < all.length; i++) {
    if (all[i].querySelector('.opt.right') && !all[i].querySelector('.opt.wrong')) right++;
  }
  if (quiz.querySelector('.score')) return;

  var p = document.createElement('p');
  p.className = 'score';
  p.style.cssText = 'margin-top:1.2rem;padding-top:1rem;border-top:1px solid var(--rule);' +
    'font-family:ui-sans-serif,system-ui,sans-serif;font-weight:600';
  p.textContent = right + ' / ' + all.length +
    (right === all.length ? '  — solid. Move on.'
      : '  — re-read the sections you missed before moving on.');
  quiz.appendChild(p);
}
