var female = document.getElementById("female");
var femaleSquare = document.getElementById("femaleRadio");
var male = document.getElementById("male");
var maleSquare = document.getElementById("maleRadio");

function femaleActive() {
    female.classList.add("radioActive");
    femaleSquare.classList.add("radioActiveDot");
};
function maleActive() {
    male.classList.add("radioActive");
    maleSquare.classList.add("radioActiveDot");
};
function femaleNotActive() {
    female.classList.remove("radioActive");
    femaleSquare.classList.remove("radioActiveDot");
};
function maleNotActive() {
    male.classList.remove("radioActive");
    maleSquare.classList.remove("radioActiveDot");
};

female.addEventListener("click", function(){
    femaleActive();
    maleNotActive();
});
male.addEventListener("click", function(){
    maleActive();
    femaleNotActive();
});