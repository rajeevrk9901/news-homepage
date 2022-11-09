const deskbtn = document.getElementById("btn-nav")
const clsbtn = document.getElementById("cls-btn")
const active_btn = document.getElementById("mobile-navbar")



console.log(deskbtn);

deskbtn.addEventListener('click', () => {
    active_btn.classList.toggle("active");
    document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
})

clsbtn.addEventListener('click', () => {
    active_btn.classList.toggle("active");
    document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
})

