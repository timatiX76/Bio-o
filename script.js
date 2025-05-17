// Скрываем черный экран и включаем анимацию появления текста
document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("start-screen").style.display = "none";
    let video = document.getElementById("bg-video");
    video.muted = false;
    video.play();

    // Добавляем класс анимации к содержимому
    document.querySelector(".content").classList.add("fade-in");
});

// Обновляем и сохраняем количество посещений
let count = localStorage.getItem("visitorCount") || 0;
count++;
localStorage.setItem("visitorCount", count);
document.getElementById("visitor-count").innerText = count;

// Показываем цифру при наведении на глаз
let visitorEye = document.getElementById("visitor-eye");
let visitorCount = document.getElementById("visitor-count");

visitorEye.addEventListener("mouseover", function() {
    visitorCount.style.display = "inline";
});

visitorEye.addEventListener("mouseout", function() {
    visitorCount.style.display = "none";
});
