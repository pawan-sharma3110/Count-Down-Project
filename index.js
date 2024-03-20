const endDate = "23 March 2024 12:00 AM";
document.querySelector("#end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
ttttttttttttttttttttttttttt
const clock = () => {
  const currTime = new Date();
  const endTime = new Date(endDate);
  const timeDiff = (endTime - currTime) / 1000;
  if (timeDiff < 0) return;
  const leftDays = (inputs[0].value = Math.floor(timeDiff / 3600 / 24));
  const leftHours = (inputs[1].value = Math.floor((timeDiff / 3600) % 24));
  const leftMintues = (inputs[2].value = Math.floor((timeDiff / 60) % 60));
  const leftSeconds = (inputs[3].value = Math.floor(timeDiff % 60));
};

clock();

setInterval(() => {
  clock();
}, 1000);
