function setupClock() {
  const digitalTime = document.getElementById("digital-time");
  const dateElement = document.getElementById("date");

  function setDate() {
    const now = new Date();

    // 時針の角度計算
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

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
