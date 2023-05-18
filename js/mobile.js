// <!-- SCRIPT FOR SIDEMENU  -->

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0px"
}
function closemenu() {
    sidemenu.style.right = "-200px"
    console.log("click event");
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

