const endDate = new Date("21 March 2024 02:24:20 AM");
document.querySelector("#end-date").innerText = endDate.toLocaleString();
const inputs = document.querySelectorAll("input");
const myAudio = new Audio("audio/rangbarse.mp3");
const giftBtn = document.querySelector(".gift");
const wish = giftBtn.addEventListener("click",() => {
  myAudio.play();
});

const clock = () => {
  const currTime = new Date();
  const endTime = new Date(endDate);
  const timeDiff = (endTime - currTime) / 1000;
  if (timeDiff < 0) return;

  const leftDays = Math.floor(timeDiff / 3600 / 24);
  const leftHours = Math.floor((timeDiff / 3600) % 24);
  const leftMinutes = Math.floor((timeDiff / 60) % 60);
  const leftSeconds = Math.floor(timeDiff % 60);

  inputs[0].value = leftDays;
  inputs[1].value = leftHours;
  inputs[2].value = leftMinutes;
  inputs[3].value = leftSeconds;

  if (timeDiff === 0) {
    wish(); // Call wish function when timeDiff is 0
  }
};

clock();

setInterval(() => {
  clock();
}, 1000);
