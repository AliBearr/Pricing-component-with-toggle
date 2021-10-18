// variables
const toggleCircle = document.querySelector('.toggle-switch__circle');
const priceNumbers = document.querySelectorAll('.pricing-card__price');
const toggleBtn = document.querySelector('.toggle-switch__btn');

// pricing information
const priceMonthly = [19.99, 24.99, 39.99]
const priceAnnually = [199.99, 249.99, 399.99]

// Active Toggle 
function activeToggle() {
    toggleCircle.classList.toggle('toggle-switch__circle-annually');
    if (toggleCircle.classList.contains('toggle-switch__circle-annually')) {
        priceNumbers.forEach((price, index) => {
            price.textContent = `$${priceAnnually[index]}`;
        })
    }
    else {
        priceNumbers.forEach((price, index) => {
            price.textContent = `$${priceMonthly[index]}`;
        })
    }
}



toggleBtn.addEventListener('click', activeToggle)