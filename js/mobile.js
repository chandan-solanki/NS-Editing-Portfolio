// <!-- SCRIPT FOR SIDEMENU  -->

var sidemenu = document.getElementById("sidemenu");
var openUlBtn = document.getElementById("openUlBtn");

console.log(sidemenu.children);

document.addEventListener("click", (e) => {
  if (!sidemenu.contains(e.target) && e.target !== openUlBtn) closemenu();
});

Array.from(sidemenu.children).forEach((el) => {
  el.addEventListener("click", (e) => closemenu());
});

function openmenu() {
  sidemenu.style.right = "0px";
}
function closemenu() {
  sidemenu.style.right = "-200px";
  // console.log("click event");
}

// <!-- SCRIPT FOR TOGGLE SECTION FOR PROTFOLIO -->

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("project-list");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
