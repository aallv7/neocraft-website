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

function checkServerStatus() {
    const serverIp = "mc.neocraft.my.id"; // Replace with your server IP or domain
    const apiUrl = `https://mcapi.us/server/status?ip=${serverIp}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const statusElement = document.getElementById("server-status");
            const playerCountElement = document.getElementById("player-count");
            
            if (data.online) {
                statusElement.textContent = "Online";
                statusElement.style.color = "green";
                playerCountElement.textContent = `Players Online: ${data.players.now}/${data.players.max}`;
            } else {
                statusElement.textContent = "Offline";
                statusElement.style.color = "red";
                playerCountElement.textContent = "Players Online: 0";
            }
        })
        .catch(error => {
            console.error("Error fetching server status:", error);
            document.getElementById("server-status").textContent = "Error fetching data";
        });
}

// Run on page load
checkServerStatus();

// Refresh every 30 seconds
setInterval(checkServerStatus, 30000);


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
