
// <!-- SCRIPT FOR SIDEMENU BAR FOR RESPONSIVE DESIGN -->

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0px";
}
function closemenu() {
    sidemenu.style.right = "-200px";
    console.log("click event");

}



// <!-- SCRIPT FOR TABLINKS OR TABCONTENTS -->
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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



// <!-- SCRIPT FOR CONTACT FORM SUBMISSION -->
const scriptURL = 'https://script.google.com/macros/s/AKfycbySEcUXIXGi_IIktTXoU-oLgtLgZySoQfTJdbmfRTwoNni4e_iv_nXkxCoyYBqN-nFJ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');
const tick = document.getElementById('tick');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Succesfully <i class='fas fa-check'></i>";

            setTimeout(function () {

                msg.innerHTML = " ";
            }, 3000)
            form.reset();

        })
        .catch(error => console.error('Error!', error.message))
})