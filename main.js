const hams = document.querySelector('.hams_menu');
const menuList = document.querySelector('.showmenu');
hams.addEventListener('click',()=>{
    menuList.classList.toggle('active')
})

 function remove(){
    menuList.classList.remove('active')
}

// const field = document.getElementById("inputfield")
// const blurfunction = () =>{
//     field.value = "";
//     alert("value is empty")
// }


