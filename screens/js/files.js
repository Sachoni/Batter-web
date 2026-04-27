// Sample files
const files = [
    { name: "Batter App for android", type: "apk", size: "570kb", url: "assets/app-release.apk" },
    { name: "Batter App for Iphone", type: "zip", size: "16.8 kb", url: "assets/files/Telegram Bot.zip" }
];

// Icon mapping
function getIcon(type) {
    switch(type) {
        case "zip":
        case "rar":
        case "tar":
            return "📦";
        case "apk":
            return "📱";
        case "exe":
            return "💻";
        default:
            return "📁";
    }
}

// Render cards
const container = document.getElementById("fileContainer");

files.forEach(file => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="file-icon">${getIcon(file.type)}</div>
        <div class="file-name">${file.name}</div>
        <div class="file-info">${file.type.toUpperCase()} • ${file.size}</div>
        <div class="buttons">
            <button class="download" onclick="downloadFile('${file.url}')">Download</button>
            <button class="share" onclick="shareFile('${file.name}')">Share</button>
        </div>
    `;

    container.appendChild(card);
});

// Download
function downloadFile(url) {
    window.location.href = url;
}

// Share
function shareFile(name) {
    if (navigator.share) {
        navigator.share({
            title: name,
            text: "Download this file",
            url: window.location.href
        });
    } else {
        alert("Sharing not supported");
    }
}