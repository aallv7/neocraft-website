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

function openJoinPopup() {
    document.getElementById("join-popup").classList.add("show");
}

function closeJoinPopup() {
    document.getElementById("join-popup").classList.remove("show");
}

function copyToClipboard() {
    const ipText = document.getElementById("server-ip").innerText;
    navigator.clipboard.writeText(ipText).then(() => {
        alert("Server IP copied: " + ipText);
    }).catch(err => {
        console.error("Failed to copy IP:", err);
    });
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
