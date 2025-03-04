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

document.addEventListener("DOMContentLoaded", function () {
    const joinPopup = document.querySelector(".join-popup");
    const joinBtn = document.querySelector(".join-btn");
    const closeBtn = document.querySelector(".join-popup button");

    joinBtn.addEventListener("click", function () {
        joinPopup.classList.add("show");
    });

    closeBtn.addEventListener("click", function () {
        joinPopup.classList.remove("show");
    });

    // Minecraft Server Checker
    function checkServerStatus() {
        const serverIp = "mc.neocraft.my.id"; // Replace with your server IP
        const apiUrl = `https://mcapi.us/server/status?ip=${serverIp}`;
    
        const statusElement = document.getElementById("server-status");
        const playerCountElement = document.getElementById("player-count");
    
        if (!statusElement || !playerCountElement) {
            console.error("Error: #server-status or #player-count not found in the DOM");
            return;
        }
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.online) {
                    statusElement.textContent = "Online";
                    statusElement.style.color = "#3ef770";
                    playerCountElement.textContent = `Players Online: ${data.players.now}/${data.players.max}`;
                } else {
                    statusElement.textContent = "Offline";
                    statusElement.style.color = "red";
                    playerCountElement.textContent = "Players Online: 0";
                }
            })
            .catch(error => {
                console.error("Error fetching server status:", error);
                statusElement.textContent = "Error fetching data";
            });
    }
    
    
    checkServerStatus(); // Run on page load
    setInterval(checkServerStatus, 30000); // Refresh every 30 seconds
});
