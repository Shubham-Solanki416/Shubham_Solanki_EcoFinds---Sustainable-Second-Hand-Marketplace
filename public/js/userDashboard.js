document.addEventListener('DOMContentLoaded', function () {
    // Navigation between sections
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));

            // Show the target section
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Edit profile button
    const editProfileBtn = document.getElementById('editProfileBtn');

    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function () {
            alert('Edit profile functionality would be implemented here');
        });
    }

    // Avatar edit button
    const avatarEditBtn = document.querySelector('.avatar-edit-btn');

    if (avatarEditBtn) {
        avatarEditBtn.addEventListener('click', function () {
            alert('Avatar edit functionality would be implemented here');
        });
    }

    // Listing action buttons
    const editButtons = document.querySelectorAll('.action-btn.edit');
    const deleteButtons = document.querySelectorAll('.action-btn.delete');

    editButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const listingTitle = this.closest('.listing-card').querySelector('.listing-title').textContent;
            alert(`Edit functionality for "${listingTitle}" would be implemented here`);
        });
    });

    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const listingTitle = this.closest('.listing-card').querySelector('.listing-title').textContent;
            if (confirm(`Are you sure you want to delete "${listingTitle}"?`)) {
                alert(`Delete functionality for "${listingTitle}" would be implemented here`);
            }
        });
    });

    // Add new listing button
    const addListingBtn = document.querySelector('.add-listing-btn');

    if (addListingBtn) {
        addListingBtn.addEventListener('click', function () {
            alert('Add new listing functionality would be implemented here');
        });
    }

    // Settings buttons
    const settingsBtns = document.querySelectorAll('.settings-btn');

    settingsBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const btnText = this.textContent.trim();
            alert(`${btnText} functionality would be implemented here`);
        });
    });

    // Logout button
    const logoutBtn = document.querySelector('.nav-item.logout');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                alert('Logout functionality would be implemented here');
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            alert('Mobile menu functionality would be implemented here');
        });
    }
});