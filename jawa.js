const cursorHighlight = document.createElement('div');
cursorHighlight.classList.add('cursor-highlight');
document.body.appendChild(cursorHighlight);

document.addEventListener('mousemove', (e) => {
    cursorHighlight.style.left = `${e.pageX}px`;
    cursorHighlight.style.top = `${e.pageY}px`;
});

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    }
}