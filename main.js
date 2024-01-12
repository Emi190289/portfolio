const displayEls = document.querySelector('.resume_content_AboutMe');


    displayEls.addEventListener("click",()=>{
        displayEls.classList.add('add_display');
        displayEls.style.removeProperty('display:none')
    
})
