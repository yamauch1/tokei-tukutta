function setupClock() {
  const secondHand = document.getElementById("second-hand");
  const minuteHand = document.getElementById("minute-hand");
  const hourHand = document.getElementById("hour-hand");
  const digitalTime = document.getElementById("digital-time");
  const dateElement = document.getElementById("date");

  function setDate() {
    const now = new Date();

    // 時針の角度計算
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 時針は分針の位置も考慮する
    const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30;
    // 分針は秒針の位置も考慮する
    const minuteDegrees = minutes * 6 + (seconds / 60) * 6;
    // 秒針
    const secondDegrees = seconds * 6;

    // デジタル時計の表示
    const timeString = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    // 日付の表示
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    };
    const dateString = now.toLocaleDateString("ja-JP", options);

    // DOM要素の更新
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    digitalTime.textContent = timeString;
    dateElement.textContent = dateString;
  }

  // 初期表示
  setDate();

  // 1秒ごとに更新
  setInterval(setDate, 1000);
}

// ページが読み込まれたら時計を設定
document.addEventListener("DOMContentLoaded", setupClock);
