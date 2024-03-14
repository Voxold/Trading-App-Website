/* --- Reviews---*/
let slides = document.querySelectorAll('.main-4 .main-4-right .slide-review');
let index = 0;
// Next
function next(){
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}
// Prev
function prev(){
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}


/* --- Pricing ---*/
let monthBtn = document.querySelector('.main-6 .pricing-plan .monthe-button')
let yearBtn = document.querySelector('.main-6 .pricing-plan .year-button')
let monthlyPlan = document.querySelectorAll('.main-6 .pricing-box .box .price-month')
let yearlyPlan = document.querySelectorAll('.main-6 .pricing-box .box .price-year')
// Yearly
yearBtn.onclick = () => {
monthBtn.classList.remove('active');
yearBtn.classList.add('active');
monthlyPlan.forEach(mo => {mo.style.display = 'none'});
yearlyPlan.forEach(yr => {yr.style.display = 'block'});
}
// Monthly
monthBtn.onclick = () => {
monthBtn.classList.add('active');
yearBtn.classList.remove('active');
monthlyPlan.forEach(mo => {mo.style.display = 'block'});
yearlyPlan.forEach(yr => {yr.style.display = 'none'});
}