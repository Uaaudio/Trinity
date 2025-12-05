// Basic front-end behavior: newsletter + contact form validation & UI feedback
// NOTE: Replace the fake endpoints with your real API or server when ready.

document.addEventListener('DOMContentLoaded', () => {
  // Newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');

  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = (newsletterEmail.value || '').trim();
    if (!validateEmail(email)) {
      flash(newsletterForm, 'E-mail inválido', true);
      return;
    }

    // Simulated submission (replace with fetch to real endpoint)
    try {
      // Example:
      // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }), headers:{'Content-Type':'application/json'} });

      // Simulate network delay
      await sleep(500);
      flash(newsletterForm, 'Inscrito com sucesso! Obrigado.', false);
      newsletterForm.reset();
    } catch (err) {
      flash(newsletterForm, 'Erro ao se inscrever. Tente novamente.', true);
    }
  });

  // Contact form
  const contactForm = document.getElementById('contact-form');
  const contactFeedback = document.getElementById('contact-feedback');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    contactFeedback.textContent = '';

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name) return showContactFeedback('Por favor informe seu nome.', true);
    if (!validateEmail(email)) return showContactFeedback('E-mail inválido.', true);
    if (!message || message.length < 6) return showContactFeedback('Mensagem muito curta.', true);

    try {
      // Replace with real endpoint
      // await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, email, message }) });

      await sleep(700);
      showContactFeedback('Mensagem enviada! Retornaremos em até 1 dia útil.', false);
      contactForm.reset();
    } catch (err) {
      showContactFeedback('Erro ao enviar. Tente novamente mais tarde.', true);
    }
  });

  function showContactFeedback(msg, isError){
    contactFeedback.textContent = msg;
    contactFeedback.style.color = isError ? '#FF6B6B' : 'var(--accent)';
    if (!isError) setTimeout(()=> contactFeedback.textContent = '', 8000);
  }

  // small helpers
  function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

  // flash message near the form
  function flash(form, msg, isError){
    let el = form.querySelector('.form-flash');
    if (!el){
      el = document.createElement('div');
      el.className = 'form-flash';
      el.style.marginTop = '8px';
      el.style.fontWeight = '600';
      form.appendChild(el);
    }
    el.textContent = msg;
    el.style.color = isError ? '#FF6B6B' : 'var(--accent)';
    setTimeout(()=> { if(el) el.textContent = ''; }, 5000);
  }
});
