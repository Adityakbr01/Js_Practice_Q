const downloadBtn = document.querySelector(".downloadbtn");
const innerBar = document.querySelector(".inner");
const percentageDisplay = document.querySelector(".percentage");
const card = document.querySelector(".card");

let isDownloading = false;
let downloadProgress = 0;

// Simulate download with realistic progress curve
const startDownload = () => {
    if (isDownloading) return;

    isDownloading = true;
    downloadProgress = 0;
    downloadBtn.disabled = true;
    downloadBtn.textContent = "Downloading...";

    let interval = setInterval(() => {
        // Accelerate progress at different rates for realism
        if (downloadProgress < 30) {
            downloadProgress += Math.random() * 8;
        } else if (downloadProgress < 70) {
            downloadProgress += Math.random() * 4;
        } else if (downloadProgress < 95) {
            downloadProgress += Math.random() * 1.5;
        } else {
            downloadProgress += Math.random() * 0.5;
        }

        // Cap at 100%
        if (downloadProgress >= 100) {
            downloadProgress = 100;
            clearInterval(interval);
            completeDownload();
            return;
        }

        // Update UI
        updateProgress(downloadProgress);
    }, 100);
};

const updateProgress = (progress) => {
    const rounded = Math.round(progress);
    innerBar.style.width = `${rounded}%`;
    percentageDisplay.textContent = `${rounded}%`;
};

const completeDownload = () => {
    // Add completion message
    const message = document.createElement("div");
    message.className = "completion-message";
    message.textContent = "✓ Download Complete!";
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff9100, #ff5733);
        color: white;
        padding: 20px 40px;
        border-radius: 12px;
        font-size: 1.2em;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(255, 87, 51, 0.4);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(message);

    // Add animation keyframes
    const style = document.createElement("style");
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
        
        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -40%);
            }
        }
    `;
    document.head.appendChild(style);

    // Remove message after 2 seconds
    setTimeout(() => {
        message.style.animation = "slideOut 0.3s ease-out forwards";
        setTimeout(() => {
            message.remove();
        }, 300);
    }, 2000);

    // Reset button
    setTimeout(() => {
        downloadBtn.disabled = false;
        downloadBtn.textContent = "Download";
        isDownloading = false;
        downloadProgress = 0;
        innerBar.style.width = "0%";
        percentageDisplay.textContent = "0%";
    }, 2500);
};

// Event listener
downloadBtn.addEventListener("click", startDownload);



//Ye Ai se Egnrated hai Sir G