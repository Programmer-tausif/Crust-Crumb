document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuToggle.textContent = isExpanded ? '☰' : '✕'; // Toggle icon
        });
    }

    // 2. Menu Filtering Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' to the clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');

            menuItems.forEach(item => {
                // If the category is 'all' OR the item has the matching category class
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block'; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        });
    });

    // 3. Order/Cart Button Interactivity
    const allOrderButtons = document.querySelectorAll('.order-btn, .btn-cta, .add-to-cart-btn');
    
    allOrderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const itemName = button.getAttribute('data-item') || 'Your Order';

            // Simulate adding to cart or redirecting to an order page
            alert(`"${itemName}" added! Redirecting to the secure checkout page... (This would be your backend logic)`);
            
            // In a real application, you would navigate to the checkout page here:
            // window.location.href = '/checkout.html';
        });
    });

    // 4. Simple Scroll-to-Top (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});