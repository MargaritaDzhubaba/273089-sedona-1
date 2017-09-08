var link = document.querySelector(".search-hotel-btn");
var modal = document.querySelector(".search-hotel-popup");

var searchButton = document.querySelector(".search-hotel-btn");
var searchForm = document.querySelector(".search-hotel-popup");
var lessButton = document.querySelectorAll(".counter .minus");
var moreButton = document.querySelectorAll(".counter .plus");

var adultInput = document.getElementById("amount-of-adults");
var childrenInput = document.getElementById("amount-of-children");

var adults = {
  adults__lessButton: lessButton[0],
  adults__moreButton: moreButton[0],
  adultTotal: adultInput.value
};

var childrens = {
  childrens__lessButton: lessButton[1],
  childrens__moreButton: moreButton[1],
  childrenTotal: childrenInput.value
}

modal.classList.add("modal-content-opened")

link.addEventListener("click", function(event){
event.preventDefault();
  modal.classList.toggle("modal-content-closed")
});

adults.adults__lessButton.addEventListener("click", function(e) {
  if (adults.adultTotal != 0) {
    adultInput.value = --adults.adultTotal;
  }
  console.log(adults.adultTotal);
  return adults.adultTotal;
})

adults.adults__moreButton.addEventListener("click", function(e) {
  adultInput.value = ++adults.adultTotal;
  console.log(adults.adultTotal);
  return adults.adultTotal;
})

childrens.childrens__lessButton.addEventListener("click", function(e) {
  if (childrens.childrenTotal != 0) {
    childrenInput.value = --childrens.childrenTotal;
  }
  console.log(childrens.childrenTotal);
  return childrens.childrenTotal;
})

childrens.childrens__moreButton.addEventListener("click", function(e) {
  childrenInput.value = ++childrens.childrenTotal;
  console.log(childrens.childrenTotal);
  return childrens.childrenTotal;
})