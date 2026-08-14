// certificate.js – handles PDF preview modal for certificates

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('certModal');
  const iframe = document.getElementById('certModalIframe');
  const closeBtn = document.getElementById('closeCertModal');

  // Open modal when a certification card is clicked
  const cards = document.querySelectorAll('.certification-card');
  cards.forEach(card => {
    card.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor navigation
      const pdfUrl = this.getAttribute('data-pdf');
      if (!pdfUrl) return;
      iframe.src = pdfUrl;
      modal.classList.remove('hidden');
    });
  });

  // Close modal logic
  function closeModal() {
    iframe.src = '';
    modal.classList.add('hidden');
  }

  closeBtn.addEventListener('click', closeModal);
  // Also close when clicking outside the content area
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});
