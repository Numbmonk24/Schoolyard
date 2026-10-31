// BrightSteps Educational Aids - Basic interactions

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle (simple version)
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '70px';
      nav.style.right = '1rem';
      nav.style.background = 'white';
      nav.style.padding = '1rem';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      nav.style.gap = '0.75rem';
    });
  }

  // Shop category filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Simple "Add to Cart" feedback
  const buyButtons = document.querySelectorAll('.btn-buy');
  buyButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productName = this.getAttribute('data-product') || 'Item';
      this.textContent = 'Added ✓';
      this.style.background = '#059669';
      this.disabled = true;

      setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.style.background = '';
        this.disabled = false;
      }, 2000);

      // In a real site you would add to a cart system here
      console.log('Added to cart:', productName);
    });
  });
});
