const sideBar = document.querySelector('.side-barr')
const hamB = document.querySelector('.ham')
const close = document.querySelector('.close-sidebar')

hamB.addEventListener('click', ()=> {
    sideBar.classList.toggle('translate-x-[100%]')
})
close.addEventListener('click', ()=> {
    // console.log('hellow')
    sideBar.classList.toggle('translate-x-[100%]')
})


