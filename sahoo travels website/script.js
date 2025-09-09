document.addEventListener('DOMContentLoaded', function () {
    const applyCouponBtn = document.getElementById('apply-coupon');
    const couponInput = document.getElementById('coupon-input');
    const discountMessage = document.getElementById('discount-message');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', function () {
            if (couponInput.value.trim().toLowerCase() === 'bablu10') {
                discountMessage.textContent = 'Coupon applied successfully! You get a 10% discount.';
                discountMessage.style.color = 'green';
            } else {
                discountMessage.textContent = 'Invalid coupon code.';
                discountMessage.style.color = 'red';
            }
        });
    }

    // Dark Mode Toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function () {
            if (this.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }
});
