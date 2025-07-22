function showView(viewId) {
  document.querySelectorAll('.app-view').forEach(v => v.style.display = 'none');
  const view = document.getElementById(viewId);
  if (view) view.style.display = '';
}

window.addEventListener('DOMContentLoaded', () => {
  // Start at landing view
  showView('landing-view');

  // Landing: Open Card -> Message for You
  const toCardBtn = document.getElementById('to-card-btn');
  if (toCardBtn) {
    toCardBtn.addEventListener('click', () => showView('message-view'));
  }

  // Message: Memory Wall
  const toMemoryWallBtn = document.getElementById('to-memorywall-btn');
  if (toMemoryWallBtn) {
    toMemoryWallBtn.addEventListener('click', () => showView('memorywall-view'));
  }

  // Memory Wall: Open Card -> Card Page
  const toCardBtn2 = document.getElementById('to-card-btn-2');
  if (toCardBtn2) {
    toCardBtn2.addEventListener('click', () => showView('card-view'));
  }

  // Card: Card logic (existing)
  // Blooming sunflowers and surprise modal
  const blooming = document.querySelector('.blooming-sunflowers');
  const surpriseBtn = document.querySelector('.surprise-btn');
  const cardSurpriseModal = document.querySelector('.card-surprise-modal');
  const closeSurprise = document.querySelector('.close-surprise');
  if (surpriseBtn && cardSurpriseModal && closeSurprise) {
    surpriseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cardSurpriseModal.classList.add('active');
    });
    closeSurprise.addEventListener('click', () => {
      cardSurpriseModal.classList.remove('active');
    });
    cardSurpriseModal.addEventListener('click', (e) => {
      if (e.target === cardSurpriseModal) cardSurpriseModal.classList.remove('active');
    });
  }
  // Bloom sunflowers on card view show
  const cardView = document.getElementById('card-view');
  if (cardView) {
    const observer = new MutationObserver(() => {
      if (cardView.style.display !== 'none' && blooming) {
        blooming.innerHTML = '';
        for (let i = 0; i < 5; i++) {
          const bloom = document.createElement('div');
          bloom.className = 'bloom';
          blooming.appendChild(bloom);
        }
      }
    });
    observer.observe(cardView, { attributes: true, attributeFilter: ['style'] });
  }
}); 