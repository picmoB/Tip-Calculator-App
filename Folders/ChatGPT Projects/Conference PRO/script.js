// Pro script: offline html2canvas fallback, toasts, generate & download
(function(){
  const form = document.getElementById('ticket-form');
  const inputs = Array.from(form.querySelectorAll('input[type="text"], select'));
  const generateBtn = document.getElementById('generate-btn');
  const downloadBtn = document.getElementById('download-btn');
  const resetBtn = document.getElementById('reset-btn');
  const ticketEl = document.getElementById('ticket');
  const toastWrapper = createToastWrapper();

  // helper to set text content safely
  function setText(targetSelector, text){
    const el = document.querySelector(targetSelector);
    if(!el) return;
    el.textContent = text || '—';
  }

  // Live binding: every input with data-target will update its target
  inputs.forEach(input => {
    const target = input.getAttribute('data-target');
    if(!target) return;
    input.addEventListener('input', () => {
      setText(target, input.value);
      // clear validation hint as user types
      const hint = document.getElementById('hint-' + input.id);
      if(hint) { hint.textContent = ''; input.classList.remove('invalid'); }
    });
  });

  // Basic validation: required fields must be non-empty
  function validate(){
    let ok = true;
    const name = document.getElementById('fullName');
    const hintName = document.getElementById('hint-fullName');
    if(!name.value.trim()){
      ok = false;
      name.classList.add('invalid');
      if(hintName) hintName.textContent = 'Please enter your full name.';
    }
    return ok;
  }

  function animateTicket() {
    ticketEl.classList.remove('fade-in');
    // force reflow
    void ticketEl.offsetWidth;
    ticketEl.classList.add('fade-in');
  }

  function generateTicket(){
    if(!validate()) return;
    // Ensure preview has latest values
    inputs.forEach(i => setText(i.getAttribute('data-target'), i.value));
    downloadBtn.disabled = false;
    animateTicket();
    showToast('✅ Ticket generated', 'success');
  }

  function downloadTicket(){
    if(typeof html2canvas !== 'function'){
      showToast('⚠️ Could not generate ticket (html2canvas missing)', 'error');
      return;
    }

    downloadBtn.disabled = true;
    downloadBtn.textContent = 'Preparing...';

    html2canvas(ticketEl, {backgroundColor: null, scale: 2}).then(canvas => {
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'conference-ticket.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast('✅ Ticket saved successfully!', 'success');
    }).catch(err => {
      console.error(err);
      showToast('⚠️ Could not generate ticket', 'error');
    }).finally(() => {
      downloadBtn.disabled = false;
      downloadBtn.textContent = 'Download Ticket';
    });
  }

  function resetForm(){
    // restore defaults in preview
    setText('#ticket-name','Your Name');
    setText('#ticket-company','Company');
    setText('#ticket-role','Role');
    setText('#ticket-type','General');
    setText('#ticket-seat','Seat');

    // clear hints and validation
    inputs.forEach(i => { i.classList.remove('invalid'); const hint = document.getElementById('hint-' + i.id); if(hint) hint.textContent=''; });
    downloadBtn.disabled = true;
  }

  // Toast system
  function createToastWrapper(){
    const w = document.createElement('div');
    w.className = 'toast-wrapper';
    document.body.appendChild(w);
    return w;
  }

  function showToast(message, type='success', duration=3000){
    const t = document.createElement('div');
    t.className = 'toast ' + (type==='error' ? 'error' : 'success');
    t.innerHTML = '<span class="icon">' + (type==='error' ? '⚠️' : '✅') + '</span><div class="msg">' + message + '</div>';
    toastWrapper.appendChild(t);
    // show
    requestAnimationFrame(() => t.classList.add('show'));
    // remove after duration
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(()=> t.remove(), 400);
    }, duration);
  }

  // Attach events
  generateBtn.addEventListener('click', generateTicket);
  downloadBtn.addEventListener('click', downloadTicket);
  resetBtn.addEventListener('click', resetForm);

  // initialize
  resetForm();

})();