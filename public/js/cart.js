document.addEventListener('DOMContentLoaded', function () {
    // Initialize cart functionality
    initCart();
});

function initCart() {
    // Quantity buttons functionality
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    quantityButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemId = this.getAttribute('data-id');
            const quantityElement = this.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);

            if (this.classList.contains('plus')) {
                quantity++;
            } else if (this.classList.contains('minus') && quantity > 1) {
                quantity--;
            }

            quantityElement.textContent = quantity;
            updateItemTotal(itemId, quantity);
            updateCartTotals();
        });
    });

    // Remove item functionality
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemId = this.getAttribute('data-id');
            const cartItem = this.closest('.cart-item');

            // Add removal animation
            cartItem.style.opacity = '0';
            cartItem.style.transform = 'translateX(50px)';

            setTimeout(() => {
                cartItem.remove();
                updateCartTotals();
                checkEmptyCart();
            }, 300);
        });
    });

    // Checkout button functionality
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', function () {
        // Simulate checkout process
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        this.disabled = true;

        setTimeout(() => {
            alert('Checkout functionality would be implemented here!');
            this.innerHTML = 'Proceed to Checkout <i class="fas fa-arrow-right"></i>';
            this.disabled = false;
        }, 1500);
    });
}

function updateItemTotal(itemId, quantity) {
    // In a real application, this would update the price based on quantity
    // For this demo, we're just updating the visual representation
    console.log(`Item ${itemId} quantity updated to ${quantity}`);
}

function updateCartTotals() {
    // Calculate new totals based on items in cart
    const items = document.querySelectorAll('.cart-item');
    let itemCount = items.length;
    let subtotal = 0;

    items.forEach(item => {
        const priceText = item.querySelector('.item-price').textContent;
        const price = parseFloat(priceText.replace('Rs. ', '').replace(',', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        subtotal += price * quantity;
    });

    const shipping = 200;
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + shipping + tax;

    // Update the UI
    document.querySelector('.items-count').textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'}`;
    document.querySelector('.cart-count').textContent = itemCount;

    document.querySelectorAll('.summary-row')[0].querySelector('span:last-child').textContent = `Rs. ${subtotal.toLocaleString()}`;
    document.querySelectorAll('.summary-row')[2].querySelector('span:last-child').textContent = `Rs. ${tax.toFixed(0)}`;
    document.querySelectorAll('.summary-row')[3].querySelector('span:last-child').textContent = `Rs. ${total.toLocaleString()}`;
}

function checkEmptyCart() {
    const items = document.querySelectorAll('.cart-item');
    if (items.length === 0) {
        // Show empty cart message
        const cartItems = document.querySelector('.cart-items');
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <button class="browse-btn">Browse Products</button>
            </div>
        `;

        // Add event listener to browse button
        document.querySelector('.browse-btn').addEventListener('click', function () {
            alert('Redirecting to product listings...');
        });
    }
}

// Initialize cart totals on page load
updateCartTotals();