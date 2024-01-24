const hams = document.querySelector('.hams_menu');
const menuList = document.querySelector('.showmenu');
hams.addEventListener('click',()=>{
    menuList.classList.toggle('active')
})

 function remove(){
    menuList.classList.remove('active')
}

const labelEl = document.querySelector('label');
const inputEl = document.querySelector('input');
inputEl.addEventListener('click',()=>{
    labelEl.classList.remove('label')
    labelEl.classList.add('active')
})



