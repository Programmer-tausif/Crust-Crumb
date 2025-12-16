document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuToggle.textContent = isExpanded ? '☰' : '✕'; 
        });
    }

 
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
           
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');

            menuItems.forEach(item => {
                
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block'; 
                } else {
                    item.style.display = 'none'; 
                }
            });
        });
    });

    
    const allOrderButtons = document.querySelectorAll('.order-btn, .btn-cta, .add-to-cart-btn');
    
    allOrderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const itemName = button.getAttribute('data-item') || 'Your Order';

           
            alert(`"${itemName}" added! Redirecting to the secure checkout page... (This would be your backend logic)`);
            
         
        });
    });

   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
