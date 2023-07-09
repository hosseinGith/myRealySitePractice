const navMenuContainer = document.querySelector('.headerNav')
const navMenu = document.querySelector('.menu')
const svgOpenMenu = document.querySelector('.svgMenu')
const spans = document.querySelectorAll('.menu >span')
const uls = document.querySelectorAll('.menu >ul')
window.addEventListener('click', (e) => {
    document.body.style.transition = 'all 1s'
    if (navMenuContainer == e.target)
        navMenuContainer.style.display = 'none'
})
svgOpenMenu.addEventListener('click', () => {
    navMenuContainer.style.display = 'flex'
})
spans[1].addEventListener('click', (e) => {
    uls[1].style.display = 'block'
})
spans[1].addEventListener('click', (e) => {
    uls[1].style.display = 'block'
})
spans[1].addEventListener('click', (e) => {
    uls[1].style.display = 'block'
})
spans[1].addEventListener('click', (e) => {
    uls[1].style.display = 'block'
})
spans[1].addEventListener('click', (e) => {
    uls[1].style.display = 'block'
})