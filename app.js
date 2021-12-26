const lonSlide = document.querySelector(".imgSlider");
const allImgs = document.querySelectorAll(".imgSlider img");

const nxtBtn = document.getElementById("nxtBtn");
const perBtn = document.querySelectorAll("#preBtn");


let counter = 1;
const size = allImgs[1].clientWidth;

lonSlide.style.transform = "translateX(" + -size * counter + "px)";

nxtBtn.addEventListener('click',()=>{
  if(counter >= allImgs.length -1) return; 
  lonSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  lonSlide.style.transform = "translateX(" + -size * counter + "px)";
})

preBtn.addEventListener('click',()=>{
  if (counter <= 0) return;
  lonSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  lonSlide.style.transform = "translateX(" + -size * counter + "px)";
})

lonSlide.addEventListener('transitionend',()=>{
  if (allImgs[counter].id == "lastone") {
    lonSlide.style.transition = "none";
    counter = allImgs.length -2;
    lonSlide.style.transform = "translateX("+ (-size * counter) + "px)";
  }

  if (allImgs[counter].id == "firstone") {
    lonSlide.style.transition = "none";
    counter = 1;
    lonSlide.style.transform = "translateX("+ (-size * counter) + "px)";
}

})

