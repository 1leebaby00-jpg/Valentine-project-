const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

let noClicks = 0;
const noTexts = [
  "Are you sure? 😳",
  "Are you sure sure? 🥺",
  "Babe pleaseeeee 😭",
  "Don’t break my heart 💔",
  "I’m begging now 😩"
];

noBtn.addEventListener("click", () => {
  noClicks++;

  noBtn.innerText = noTexts[Math.min(noClicks - 1, noTexts.length - 1)];

  // shrink NO
  const scaleNo = Math.max(0.4, 1 - noClicks * 0.15);
  noBtn.style.transform = `scale(${scaleNo})`;

  // grow YES
  const scaleYes = 1 + noClicks * 0.2;
  yesBtn.style.transform = `scale(${scaleYes})`;
});

yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");

  const myConfetti = confetti.create(
    document.getElementById("fireworks"),
    { resize: true, useWorker: true }
  );

  setInterval(() => {
    myConfetti({
      particleCount: 150,
      spread: 160,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
      colors: [
        "#ff0a54",
        "#ff477e",
        "#ff85a1",
        "#fbb1b1",
        "#fae0e4",
        "#ffd6e0"
      ]
    });
  }, 600);
});