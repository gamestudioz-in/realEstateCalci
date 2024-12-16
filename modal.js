const openModalBtn = document.getElementById('showStampDuty');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');

    // Open Modal
    openModalBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'block';
    });

    // Close Modal
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
    });
