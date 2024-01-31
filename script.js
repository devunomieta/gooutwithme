const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  // Hide the buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Create an anchor element
  const link = document.createElement("a");
  // Set the href attribute to the desired URL
  link.href = "https://wa.me/+2348156841952";
  // Set the text content of the anchor element
  link.textContent = "Yay, Click Me For the Full Plan";
  // Append the anchor element to the question element
  question.innerHTML = "";
  question.appendChild(link);
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnd5NWNhbHAwOHo3MnA3OGFoM243bW5qMTkxZW5yeTFwb3RmbTBpYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7yORCExjS87Jk10xSU/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
