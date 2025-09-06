document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newListingForm');
    const imageInput = document.getElementById('productImage');
    const imagePreview = document.getElementById('imagePreview');

    // Image preview functionality
    imageInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function () {
                // Remove any existing image
                const existingImg = imagePreview.querySelector('img');
                if (existingImg) {
                    existingImg.remove();
                }

                // Hide the placeholder content
                imagePreview.querySelector('i').style.display = 'none';
                imagePreview.querySelector('p').style.display = 'none';

                // Create and append the new image
                const img = document.createElement('img');
                img.src = reader.result;
                img.alt = 'Product preview';
                imagePreview.appendChild(img);

                // Add a change image text
                const changeText = document.createElement('p');
                changeText.textContent = 'Click to change image';
                changeText.style.position = 'absolute';
                changeText.style.bottom = '10px';
                changeText.style.background = 'rgba(0,0,0,0.5)';
                changeText.style.color = 'white';
                changeText.style.padding = '5px 10px';
                changeText.style.borderRadius = '4px';
                changeText.style.fontSize = '12px';
                imagePreview.appendChild(changeText);
            });

            reader.readAsDataURL(file);
        }
    });

    // Click on preview to trigger file input
    imagePreview.addEventListener('click', function () {
        imageInput.click();
    });

    // Form submission handling
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic validation
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                highlightError(field);
            } else {
                removeHighlight(field);
            }
        });

        // Image validation
        if (!imageInput.files.length) {
            isValid = false;
            imagePreview.style.borderColor = 'var(--error-color)';
        } else {
            imagePreview.style.borderColor = '';
        }

        if (isValid) {
            // Show loading state
            const submitButton = form.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Adding Product...';
            submitButton.disabled = true;

            // In a real application, you would send the form data to a server here
            // For this example, we'll simulate a network request
            setTimeout(() => {
                alert('Product added successfully!');
                form.reset();

                // Reset image preview
                const img = imagePreview.querySelector('img');
                const changeText = imagePreview.querySelector('p:last-child');
                if (img) img.remove();
                if (changeText) changeText.remove();

                imagePreview.querySelector('i').style.display = 'block';
                imagePreview.querySelector('p').style.display = 'block';

                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        }
    });

    // Add real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (this.hasAttribute('required') && !this.value.trim()) {
                highlightError(this);
            } else {
                removeHighlight(this);
            }
        });
    });

    // Helper functions for validation UI
    function highlightError(field) {
        field.style.borderColor = 'var(--error-color)';

        // Add error message if it doesn't exist
        if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.style.color = 'var(--error-color)';
            errorMsg.style.fontSize = '0.85rem';
            errorMsg.style.marginTop = '5px';
            errorMsg.style.display = 'block';
            errorMsg.textContent = 'This field is required';
            field.parentNode.appendChild(errorMsg);
        }
    }

    function removeHighlight(field) {
        field.style.borderColor = '';

        // Remove error message if it exists
        const errorMsg = field.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
        }
    }

    // Dynamic form behavior based on category selection
    const categorySelect = document.getElementById('productCategory');
    const yearField = document.getElementById('yearManufacture');
    const brandField = document.getElementById('brand');
    const modelField = document.getElementById('model');

    categorySelect.addEventListener('change', function () {
        const value = this.value;

        // Show/hide fields based on category
        if (value === 'electronics' || value === 'sports') {
            yearField.closest('.form-group').style.display = 'block';
            brandField.closest('.form-group').style.display = 'block';
            modelField.closest('.form-group').style.display = 'block';
        } else {
            yearField.closest('.form-group').style.display = 'block';
            brandField.closest('.form-group').style.display = 'block';
            modelField.closest('.form-group').style.display = 'none';
        }

        if (value === 'books') {
            yearField.closest('.form-group').style.display = 'block';
            brandField.closest('.form-group').style.display = 'none';
            modelField.closest('.form-group').style.display = 'none';
        }
    });
});