function openJoinPopup() {
    document.getElementById("join-popup").classList.toggle("show");
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

let slideIndex = 0;
let slides = [];

function loadImages() {
    fetch("images.json")
        .then(response => response.json())
        .then(data => {
            slides = data.images;
            const slideContainer = document.getElementById("slides");
            slideContainer.innerHTML = slides.map(src => 
                `<img class="slide fade" src="${src}" alt="Slide">`
            ).join("");
            showSlide(slideIndex);
        })
        .catch(error => console.error("Error loading images:", error));
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slideElements = document.querySelectorAll(".slide");
    
    if (n >= slideElements.length) { slideIndex = 0; } 
    if (n < 0) { slideIndex = slideElements.length - 1; }
    
    slideElements.forEach(slide => slide.style.display = "none");
    slideElements[slideIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", loadImages);
