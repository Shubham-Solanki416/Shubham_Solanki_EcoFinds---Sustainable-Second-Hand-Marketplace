document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
        });
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const resultsCount = document.querySelector('.search-results-count');

    if (searchInput && resultsCount) {
        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.trim();

            if (searchTerm.length > 0) {
                // Simulate search results (in a real app, this would be an API call)
                const randomResults = Math.floor(Math.random() * 50);
                resultsCount.textContent = `${randomResults} found`;

                if (randomResults === 0) {
                    resultsCount.style.background = '#e74c3c'; // Using hex value instead of CSS variable
                } else {
                    resultsCount.style.background = '#2ecc71'; // Using hex value instead of CSS variable
                }
            } else {
                resultsCount.textContent = '0 found';
                resultsCount.style.background = '#95a5a6'; // Using hex value instead of CSS variable
            }
        });
    }

    // Filter buttons functionality
    const filterBtn = document.getElementById('filterBtn');
    const sortBtn = document.getElementById('sortBtn');
    const groupByBtn = document.getElementById('groupByBtn');

    [filterBtn, sortBtn, groupByBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function () {
                alert(`${this.querySelector('span').textContent} functionality would be implemented here`);
            });
        }
    });

    // Simulate user login state (for demo purposes)
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const userProfile = document.querySelector('.user-profile');

    if (loginBtn && signupBtn && userProfile) {
        loginBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Simulate login
            loginBtn.style.display = 'none';
            signupBtn.style.display = 'none';
            userProfile.style.display = 'flex';
        });
    }

    // Favorite button functionality
    const favoriteBtns = document.querySelectorAll('.favorite-btn');

    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#e74c3c'; // Using hex value instead of CSS variable
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '';
            }
        });
    });

    // Add to cart functionality
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            if (productCard) {
                const productTitle = productCard.querySelector('.product-title').textContent;
                alert(`Added "${productTitle}" to cart!`);
            }
        });
    });

    // Category card click functionality
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', function () {
            const heading = this.querySelector('h3');
            if (heading) {
                const categoryName = heading.textContent;
                alert(`Browsing ${categoryName} category`);
            }
        });
    });

    // View all products button
    const viewAllBtn = document.querySelector('.view-all-btn');

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function () {
            alert('Viewing all products');
        });
    }

    // Banner CTA button
    const bannerCta = document.querySelector('.banner-cta');

    if (bannerCta) {
        bannerCta.addEventListener('click', function () {
            alert('Exploring all products');
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input');
            if (emailInput) {
                const email = emailInput.value;
                alert(`Thank you for subscribing with ${email}!`);
                this.reset();
            }
        });
    }
});