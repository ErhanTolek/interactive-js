const maincard = document.querySelector(".main-container");
const main = document.getElementById("main");
const ratebuttonslist = document.querySelector("ul");
const submitbtn = document.querySelector(".btn-submit");
const thnkcard = document.getElementById("thank-card");
const ratevalue = document.querySelector(".banner");
const container = document.getElementById("container");
let rate;

ratebuttonslist.addEventListener("click", rating);
submitbtn.addEventListener("click", submiting);

thnkcard.style.display = "none";

function rating(e) {
  if (e.target.className === "btn") {
    localStorage.setItem("rate", e.target.innerText);
  }
}

function submiting(e) {
  maincard.remove();
  ratevalue.innerText = `You selected ${getRatefromLS()} out of 5 `;
  thnkcard.style.display = "block";
}

function getRatefromLS() {
  const value1 = parseInt(localStorage.getItem("rate"));

  return value1;
}

getRatefromLS();
