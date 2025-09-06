document.addEventListener('DOMContentLoaded', function () {
    // Image Thumbnail Selection
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));

            // Add active class to clicked thumbnail
            this.classList.add('active');

            // Update main image
            const newImageSrc = this.getAttribute('data-image');
            mainImage.src = newImageSrc;
        });
    });

    // Quantity Selector
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantity');

    decreaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });

    // Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Add to Cart Functionality
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    addToCartBtn.addEventListener('click', function () {
        const size = document.querySelector('input[name="size"]:checked').value;
        const quantity = quantityInput.value;
        const productName = document.querySelector('.product-title').textContent;

        // Show confirmation message
        alert(`Added ${quantity} ${productName} (Size: ${size}) to cart!`);

        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        const currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + parseInt(quantity);
    });

    // Wishlist Functionality
    const wishlistBtn = document.querySelector('.wishlist-btn');
    const favoriteBtns = document.querySelectorAll('.favorite-btn');

    wishlistBtn.addEventListener('click', function () {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.style.color = '#e74c3c';
            alert('Added to your wishlist!');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.style.color = '';
            alert('Removed from your wishlist!');
        }
    });

    // Favorite buttons for related products
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#e74c3c';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '';
            }
        });
    });

    // Zoom Functionality
    const zoomBtn = document.getElementById('zoomBtn');

    zoomBtn.addEventListener('click', function () {
        alert('Zoom functionality would be implemented here');
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            alert('Mobile menu functionality would be implemented here');
        });
    }
});