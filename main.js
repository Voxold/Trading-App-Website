// Reviews


// Pricing Plan
let monthBtn = document.querySelector('.main-6 .pricing-plan .monthe-button')
let yearBtn = document.querySelector('.main-6 .pricing-plan .year-button')
let monthlyPlan = document.querySelectorAll('.main-6 .pricing-box .box .price-month')
let yearlyPlan = document.querySelectorAll('.main-6 .pricing-box .box .price-year')

yearBtn.onclick = () => {
    monthBtn.classList.remove('active');
    yearBtn.classList.add('active');

    monthlyPlan.forEach(mo => {mo.computedStyleMap.display = 'none'});
    yearlyPlan.forEach(yr => {yr.computedStyleMap.display = 'block'});
}

monthBtn.onclick = () => {
    monthBtn.classList.add('active');
    yearBtn.classList.remove('active');

    monthlyPlan.forEach(mo => {mo.computedStyleMap.display = 'block'});
    yearlyPlan.forEach(yr => {yr.computedStyleMap.display = 'none'});
}