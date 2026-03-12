document.getElementById('yr').textContent = new Date().getFullYear();

// ── Scroll-triggered fade-in ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.6s ease forwards';
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project-card, .skill-badge, .contact-item').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ${i * 0.07}s, transform 0.5s ${i * 0.07}s`;
  observer.observe(el);
});

// ── Deco cards float ──
document.querySelectorAll('.deco-card').forEach((card, i) => {
  card.style.animation = `float ${3 + i * 0.7}s ease-in-out infinite ${i * 0.4}s`;
});

// ── Contact form ──
(function () {
  const form    = document.getElementById('contact-form');
  if (!form) return;

  const nameEl  = document.getElementById('cf-name');
  const emailEl = document.getElementById('cf-email');
  const msgEl   = document.getElementById('cf-message');
  const submit  = document.getElementById('cf-submit');
  const btnText = document.getElementById('btn-text');
  const spinner = document.getElementById('btn-spinner');
  const counter = document.getElementById('char-counter');
  const status  = document.getElementById('form-status');

  const rules = {
    name:    { test: v => v.trim().length >= 2,                             err: '\u2736 At least 2 characters please', ok: '\u2713 Looks good' },
    email:   { test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),     err: '\u2736 Enter a valid email address',  ok: '\u2713 Valid email' },
    message: { test: v => v.trim().length >= 10,                            err: '\u2736 At least 10 characters please', ok: '\u2713 Message ready' },
  };

  // Apply visual state to a field
  function applyState(input, valid, msgEl, text) {
    input.classList.remove('is-valid', 'is-error');
    msgEl.classList.remove('visible', 'success', 'error');
    if (valid === null) { msgEl.textContent = ''; return; }
    input.classList.add(valid ? 'is-valid' : 'is-error');
    msgEl.textContent = text;
    msgEl.classList.add('visible', valid ? 'success' : 'error');
  }

  // Validate one field, return bool
  function check(input) {
    const key  = input.dataset.validate;
    const rule = rules[key];
    if (!rule) return true;
    const val   = input.value;
    const valid = rule.test(val);
    const msgEl = document.getElementById('msg-' + key);
    applyState(input, val.length === 0 ? null : valid, msgEl, val.length === 0 ? '' : (valid ? rule.ok : rule.err));
    return valid;
  }

  // Wire up each field: validate on blur, re-check on input if already touched
  [nameEl, emailEl, msgEl].forEach(input => {
    let touched = false;
    input.addEventListener('blur', () => { touched = true; check(input); });
    input.addEventListener('input', () => { if (touched) check(input); });
  });

  // Character counter
  msgEl.addEventListener('input', () => {
    const len = msgEl.value.length;
    const max = Number(msgEl.getAttribute('maxlength')) || 500;
    counter.textContent = len + ' / ' + max;
    counter.classList.toggle('warn', len > max * 0.85);
  });

  // Shake animation
  function shake(el) {
    el.style.animation = 'none';
    void el.offsetWidth; // force reflow
    el.style.animation = 'shake 0.35s ease';
    el.addEventListener('animationend', () => { el.style.animation = ''; }, { once: true });
  }

  // Submit
  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Validate all — force errors on empty fields too
    const fields = [nameEl, emailEl, msgEl];
    let allOk = true;
    fields.forEach(input => {
      const key  = input.dataset.validate;
      const rule = rules[key];
      const valid = rule.test(input.value);
      const msgEl = document.getElementById('msg-' + key);
      applyState(input, valid, msgEl, valid ? rule.ok : rule.err);
      if (!valid) allOk = false;
    });

    if (!allOk) {
      const first = fields.find(i => i.classList.contains('is-error'));
      if (first) { shake(first); first.focus(); }
      return;
    }

    // Loading state
    submit.disabled = true;
    btnText.textContent = 'Sending\u2026';
    spinner.style.display = 'inline-block';
    status.style.display = 'none';
    status.className = 'form-status';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      spinner.style.display = 'none';

      if (res.ok) {
        btnText.textContent = 'Sent \u2713';
        status.textContent = '\u2736 Got it! I\'ll get back to you soon.';
        status.className = 'form-status success';
        status.style.display = 'block';
        form.reset();
        counter.textContent = '0 / 500';
        counter.classList.remove('warn');
        fields.forEach(i => {
          const msgEl = document.getElementById('msg-' + i.dataset.validate);
          applyState(i, null, msgEl, '');
        });
      } else {
        throw new Error('server');
      }
    } catch {
      spinner.style.display = 'none';
      btnText.textContent = 'Send it \u2736';
      submit.disabled = false;
      status.textContent = '\u2736 Something went wrong \u2014 try emailing me at RojanJafarnezhad@gmail.com';
      status.className = 'form-status error';
      status.style.display = 'block';
    }
  });
})();
