const textGerak = document.querySelector(".Gr");

const result = () => {
      setTimeout(() => {
            textGerak.textContent = "Web Dev";
      }, 0);

      setTimeout(() => {
            textGerak.textContent = "Mobile Dev";
      }, 4000);

      setTimeout(() => {
            textGerak.textContent = "Full Stack Dev";
      },8000);
}

result();
setInterval(result, 12000);



let scrollContainer = document.querySelector(".scroll-bar");
let right = document.querySelector(".right");
let left = document.querySelector(".left");

scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
});

right.addEventListener("click", () => {
      scrollContainer.scrollLeft += 100;
});

left.addEventListener("click", () => {
      scrollContainer.scrollLeft -= 100;
});