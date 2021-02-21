let openModal = document.getElementsByClassName("portfolio__container__list__box"),
    overlay = document.getElementsByClassName("portfolio__overlay"),
    closeBtn = document.getElementsByClassName("close-btn"),
    funcs = [];
function modalControl(num) {
    return function() {
        openModal[num].onclick = function() {
            overlay[num].style.display = "block";
        }
        closeBtn[num].onclick = function() {
            overlay[num].classList.add("close-modal");
            setTimeout(() => {
                overlay[num].style.display = "none";
                overlay[num].classList.remove("close-modal");
            }, 400);
        }
    }
}
for (let i = 0; i < openModal.length; i++) {
    funcs[i] = modalControl(i);
}
for (let j = 0; j < openModal.length; j++) {
    funcs[j]();
}
window.onclick = function(event) {
    if(event.target.className == "portfolio__overlay") {
        event.target.classList.add("close-modal");
        setTimeout(() => {
            event.target.style.display = "none";
            event.target.classList.remove("close-modal");
        }, 400);
    }
}