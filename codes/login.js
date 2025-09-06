document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('password-toggle');
    const notification = document.getElementById('notification');
    
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
        
        // Email validation
        const emailError = document.getElementById('email-error');
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email or username';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Password validation
        const passwordError = document.getElementById('password-error');
        if (passwordInput.value === '') {
            passwordError.textContent = 'Please enter your password';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }
        
        // If form is valid, simulate login
        if (isValid) {
            // In a real application, you would send this data to your server
            // For demo purposes, we'll simulate a successful login
            
            const successMessage = document.getElementById('success-message');
            successMessage.style.display = 'block';
            
            // Show notification toast
            showNotification();
            
            // Simulate redirect to dashboard
            setTimeout(function() {
                // In a real application, you would redirect to the dashboard
                alert('Login successful! Redirecting to dashboard...');
                form.reset();
                successMessage.style.display = 'none';
            }, 2000);
        }
    });
    
    // Real-time validation
    emailInput.addEventListener('input', function() {
        const emailError = document.getElementById('email-error');
        if (emailInput.value.trim() !== '') {
            emailError.style.display = 'none';
        }
    });
    
    passwordInput.addEventListener('input', function() {
        const passwordError = document.getElementById('password-error');
        if (passwordInput.value !== '') {
            passwordError.style.display = 'none';
        }
    });
    
    // Show notification function
    function showNotification() {
        notification.classList.add('show');
        
        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Social login handlers
    document.querySelector('.social-btn.google').addEventListener('click', function() {
        alert('Google login would be implemented here');
    });
    
    document.querySelector('.social-btn.facebook').addEventListener('click', function() {
        alert('Facebook login would be implemented here');
    });
    
    // Forgot password handler
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset functionality would be implemented here');
    });
});