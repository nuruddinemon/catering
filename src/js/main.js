/*=================
header menu
====================*/ 
const menu = document.querySelector("#header nav");
const btn = document.getElementById("mobileBtn");
const closbtn = document.getElementById("closeBtn"); 

//menu open
btn.addEventListener("click", () => {
  if (menu.classList.contains("-left-[55rem]")) {
    menu.classList.replace("-left-[55rem]", "left-0");
  } 
});
//menu close
closbtn.addEventListener("click", () => {
  menu.classList.replace("left-0", "-left-[55rem]");
});

/*=================
 Most Popular Area
====================*/ 

const slides = document.querySelectorAll("#most_popular #slides #slide");
const prev = document.querySelector("#most_popular #prev");
const next = document.querySelector("#most_popular #next");

// adding css left style
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let slideCounter = 0;

next.addEventListener("click", function () {
  slideCounter++;
  slider();
});
prev.addEventListener("click", function () {
  slideCounter--;
  slider();
});

function slider() {
  // working with slides
  if (slideCounter === slides.length) {
    slideCounter = 0;
  }
  if (slideCounter < 0) {
    slideCounter = slides.length - 1;
  }

  // addding css transform style
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${slideCounter * 100}%)`;
  });
}

/*=================
 faq Area
====================*/ 

const faqBtn = document.querySelectorAll("#faqBtn");

faqBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // selecting via nodelist
    const showText = e.currentTarget.parentElement.nextElementSibling;
    if (showText.classList.contains("hidden")) {
      btn.style.transform = `rotate(90deg)`;
      showText.classList.replace("hidden", "block");
    } else {
      showText.classList.replace("block", "hidden");
      btn.style.transform = `rotate(0deg)`;
    }
  });
});
