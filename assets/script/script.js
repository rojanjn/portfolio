document.getElementById('yr').textContent = new Date().getFullYear();

// ── Custom cursor ──
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

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

// ── Contact form: validation + async submit ──
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
    name:    { validate: v => v.trim().length >= 2,                              err: '✦ At least 2 characters please', ok: '✓ Looks good' },
    email:   { validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),      err: '✦ Enter a valid email address',  ok: '✓ Valid email' },
    message: { validate: v => v.trim().length >= 10,                             err: '✦ At least 10 characters please', ok: '✓ Message ready' },
  };

  function getMsg(key) { return document.getElementById('msg-' + key); }

  function setFieldState(input, valid, msgEl, text) {
    input.classList.remove('is-valid', 'is-error');
    msgEl.classList.remove('visible', 'success', 'error');
    if (valid === null) return;
    input.classList.add(valid ? 'is-valid' : 'is-error');
    msgEl.textContent = text;
    msgEl.classList.add('visible', valid ? 'success' : 'error');
  }

  function validateField(input) {
    const key  = input.dataset.validate;
    const rule = rules[key];
    if (!rule) return true;
    const val   = input.value;
    const valid = rule.validate(val);
    setFieldState(input, val.length === 0 ? null : valid, getMsg(key), val.length === 0 ? '' : (valid ? rule.ok : rule.err));
    return valid;
  }

  // Validate on blur, re-validate on input if already touched
  [nameEl, emailEl, msgEl].forEach(input => {
    let touched = false;
    input.addEventListener('blur', () => { touched = true; validateField(input); });
    input.addEventListener('input', () => { if (touched) validateField(input); });
  });

  // Character counter
  msgEl.addEventListener('input', () => {
    const len = msgEl.value.length;
    const max = parseInt(msgEl.getAttribute('maxlength') || 500);
    counter.textContent = len + ' / ' + max;
    counter.classList.toggle('warn', len > max * 0.85);
  });

  // Shake animation for first invalid field
  function shake(el) {
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = 'shake 0.35s ease';
    el.addEventListener('animationend', () => { el.style.animation = ''; }, { once: true });
  }

  // Async submit
  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Validate all - force show errors on untouched empty fields
    const inputs = [nameEl, emailEl, msgEl];
    let allValid = true;
    inputs.forEach(input => {
      const key  = input.dataset.validate;
      const rule = rules[key];
      const valid = rule.validate(input.value);
      if (!valid) {
        setFieldState(input, false, getMsg(key), input.value.length === 0 ? rule.err : (rule.validate(input.value) ? rule.ok : rule.err));
        allValid = false;
      }
    });

    if (!allValid) {
      const first = inputs.find(i => i.classList.contains('is-error'));
      if (first) { shake(first); first.focus(); }
      return;
    }

    // Submitting state
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
        status.textContent = '\u2736 Got it! I\u2019ll get back to you soon.';
        status.className = 'form-status success';
        status.style.display = 'block';
        form.reset();
        counter.textContent = '0 / 500';
        counter.classList.remove('warn');
        inputs.forEach(i => setFieldState(i, null, getMsg(i.dataset.validate), ''));
      } else {
        throw new Error('Server error');
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