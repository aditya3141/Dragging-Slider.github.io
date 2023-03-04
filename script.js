const carousel = document.querySelector('.carousel'),
firstImg = carousel.querySelectorAll('img')[0];
arrowIcon = document.querySelectorAll('.wrapper i');

let isDragStart = false, prevPageX, preveScrollLeft;
let fristimgWidth = firstImg.clientWidth + 14;

const showhideIcon = ()=>{
    arrowIcon[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
}

arrowIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        // console.log(icon);
        carousel.scrollLeft += icon.id == 'left' ? -fristimgWidth : fristimgWidth;
        showhideIcon();
    })
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    preveScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // console.log(e.pageX);
    e.preventDefault();
    carousel.classList.add('dragging');
    if(!isDragStart) return;
    let positionDeff = e.pageX - prevPageX;
    carousel.scrollLeft = preveScrollLeft - positionDeff;
}

const draggingStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', draggingStop);