let wheel = document.getElementById("wheel");
let result = document.getElementById("result");
let ytLink = document.getElementById("yt-link");

function spin() {
  let rotate = 3600 + Math.floor(Math.random() * 360);
  wheel.style.transform = rotate(${rotate}deg);
  result.textContent = "Spinning...";
  ytLink.style.display = "none";

  setTimeout(() => {
    result.textContent = "Congratulations! You won an iPhone!";
    ytLink.textContent = "Click here to claim your prize";
    ytLink.href = "https://youtube.com/@justtakko?si=x5Yc-0VnvtOS2-KG"; // Apna YT link daal yahan
    ytLink.style.display = "block";
  }, 4000);
}
