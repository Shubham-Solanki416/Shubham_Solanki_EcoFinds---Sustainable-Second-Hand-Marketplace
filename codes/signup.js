document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('password-toggle');
    const passwordRequirements = document.getElementById('password-requirements');
    const confirmInput = document.getElementById('confirmPassword');
    
    // Show password requirements on focus
    passwordInput.addEventListener('focus', function() {
        passwordRequirements.style.display = 'block';
    });
    
    passwordInput.addEventListener('blur', function() {
        passwordRequirements.style.display = 'none';
    });
    
    // Toggle password visibility
    passwordToggle.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.classList.remove('fa-eye');
            passwordToggle.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            passwordToggle.classList.remove('fa-eye-slash');
            passwordToggle.classList.add('fa-eye');
        }
    });
    
    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Name validation
        const nameInput = document.getElementById('displayName');
        const nameError = document.getElementById('name-error');
        if (nameInput.value.length < 2 || nameInput.value.length > 30) {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Email validation
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Password validation
        const passwordError = document.getElementById('password-error');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }
        
        // Confirm password validation
        const confirmError = document.getElementById('confirm-error');
        if (passwordInput.value !== confirmInput.value) {
            confirmError.style.display = 'block';
            isValid = false;
        } else {
            confirmError.style.display = 'none';
        }
        
        // If form is valid, show success message
        if (isValid) {
            const successMessage = document.getElementById('success-message');
            successMessage.style.display = 'block';
            
            // Simulate form submission
            setTimeout(function() {
                alert('Account created successfully! In a real application, you would be redirected to the login page.');
                form.reset();
                successMessage.style.display = 'none';
            }, 2000);
        }
    });
    
    // Real-time validation for confirm password
    confirmInput.addEventListener('input', function() {
        const confirmError = document.getElementById('confirm-error');
        if (passwordInput.value !== confirmInput.value) {
            confirmError.style.display = 'block';
        } else {
            confirmError.style.display = 'none';
        }
    });
});