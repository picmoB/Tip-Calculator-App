// Enhanced Ticket Generator script
// - Live updates based on data-target attributes
// - Simple validation with hints
// - Download ticket as image via html2canvas
// - Reset behavior

(function(){
  const form = document.getElementById('ticket-form');
  const inputs = Array.from(form.querySelectorAll('input[type="text"], select'));
  const generateBtn = document.getElementById('generate-btn');
  const downloadBtn = document.getElementById('download-btn');
  const resetBtn = document.getElementById('reset-btn');
  const ticketEl = document.getElementById('ticket');

  // helper to set text content safely
  function setText(targetSelector, text){
    const el = document.querySelector(targetSelector);
    if(!el) return;
    el.textContent = text || (el.dataset && el.dataset.placeholder) || '—';
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

  function generateTicket(){
    // Validate
    if(!validate()) return;
    // Ensure preview has latest values
    inputs.forEach(i => setText(i.getAttribute('data-target'), i.value));
    downloadBtn.disabled = false;
    downloadBtn.removeAttribute('aria-disabled');
    downloadBtn.classList.remove('disabled');
    // subtle animation
    ticketEl.animate([{transform:'scale(.99)'},{transform:'scale(1)'}],{duration:160});
  }

  function downloadTicket(){
    // ensure html2canvas is available
    if(typeof html2canvas !== 'function'){
      alert('Download requires html2canvas. Please check your connection or include it locally.');
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
    }).catch(err => {
      console.error(err);
      alert('Sorry — could not generate image.');
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

  // Attach events
  generateBtn.addEventListener('click', generateTicket);
  downloadBtn.addEventListener('click', downloadTicket);
  resetBtn.addEventListener('click', resetForm);

  // initialize
  resetForm();

})();