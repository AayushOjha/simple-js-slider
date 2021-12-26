const lonSlide = document.querySelector(".imgSlider");
const allImgs = document.querySelectorAll(".imgSlider img");

const nxtBtn = document.getElementById("nxtBtn");
const perBtn = document.querySelectorAll("#preBtn");


let counter = 1;
const size = allImgs[1].clientWidth;

lonSlide.style.transform = "translateX(" + -size * counter + "px)";

nxtBtn.addEventListener('click',()=>{
  lonSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  lonSlide.style.transform = "translateX(" + -size * counter + "px)";
})

preBtn.addEventListener('click',()=>{
  lonSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  lonSlide.style.transform = "translateX(" + -size * counter + "px)";
})