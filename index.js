const image = document.getElementsByClassName("grid-img");
const imgCheckBox = document.getElementsByClassName("img-checkbox");
const button = document.getElementById("submit-btn");

let count = 1;

button.addEventListener("click", () => {
  count++;
  for (let i = 0; i < image.length; i++) {
    image[i].src = `https://picsum.photos/100?random=${(i + 1) * count}`;
    imgCheckBox[i].checked = false;
  }
});
