import ytdata from "./ytdata.js";

// ----------- SET COPY RIGHT DATE SECTION ------------
const copyright_date = document.querySelector(".copyright-date");

window.addEventListener("load", () => {
  setCopyRightDate();
  console.log("width : ", window.innerWidth);
});

function setCopyRightDate() {
  let date = new Date();
  date = date.getFullYear();
  copyright_date.innerHTML = `<p class="copyright-date">Copyright © nseditingservice <span class="footer-logo"><img src="/images/NS Editing Service Logo Violet.png" alt="ns_log"></span> ${date}</p>`;
}

// <!-- SCRIPT FOR SIDEMENU BAR FOR RESPONSIVE DESIGN -->

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0px";
}

function closemenu() {
  sidemenu.style.right = "-200px";
  console.log("click event");
}

// <!-- SCRIPT FOR TABLINKS AND TABCONTENTS -->
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
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxmU5fpv07B2PbKhK3AysBphzU9YmxHCf6d8H8DXFJuwdXC5GvK0T-s5ESyBynPQaYA/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const tick = document.getElementById("tick");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Succesfully <i class='fas fa-check'></i>";

      setTimeout(function () {
        msg.innerHTML = " ";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// --------------------- GENERATE CREATORS --------------

const main_creator_conatanier = document.querySelector(
  ".main-creator-conatanier"
);

// let channelIdArr = [
//   "UC9dyrsYEmD4iGJ8Oz1G5dpw",
//   "UCiGyWN6DEbnj2alu7iapuKQ",
//   "UC3N9i_KvKZYP4F84FPIzgPQ",
//   "UC-CSyyi47VX1lD9zyeABW3w",
//   "UCneyi-aYq4VIBYIAQgWmk_w",
//   "UCj22tfcQrWG7EMEKS0qLeEg",
//   "UCsDTy8jvHcwMvSZf_JGi-FA",
//   "UCzwCEE_PchiBULMnAJqhGVg",
// ];

// async function fetchData() {
//   const promises = channelIdArr.map((id) => getData(id));

//   console.log(promises);

//   try {
//     const res = await Promise.allSettled(promises);
//     // console.log(res);

//     res.forEach((provalue) => {
//       if (provalue.status === "fulfilled") {
//         createCreator(provalue.value);
//       } else {
//         console.log("error ", provalue.reason);
//       }
//     });

//     setLastEl();
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// async function getData(channelId) {
//   const url = `https://yt-api.p.rapidapi.com/channel/about?id=${channelId}`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "ec6c980ec1msh2cf222d5db03180p1d0350jsnc6b46f4da18f",
//       "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     // console.log(result);
//     // createCreator(result);
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

ytdata.map((data) => {
  createCreator(data);
});


function createCreator(data) {
  let elcreatordiv = generateCreator(data);
  main_creator_conatanier.innerHTML += elcreatordiv;
}

function generateCreator(data) {
  let channelname = data.ytname;
  let subscriberCnt = data.subscriberCountText;
  let logoUrl = data.src;

  return `<div class="cards">
    <div class="creator-img">
        <img src="${logoUrl}" alt="creator img">
    </div>
    <p class="creator-name">${channelname}</p>
    <p class="creator-subscriber">${subscriberCnt} Subscriber </p>
    </div>`;
}

function setLastEl() {
  let lastEL = `<div class="manyMore">
                <p>and many more......</p>
                </div>`;
  main_creator_conatanier.innerHTML += lastEL;
}


setLastEl();

// fetchData();
