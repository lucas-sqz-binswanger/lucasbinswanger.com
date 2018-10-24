// select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCFmONmcYXo05dniZSP_W-GoaVkRaGZpTQ",
  authDomain: "contactform-4eb14.firebaseapp.com",
  databaseURL: "https://contactform-4eb14.firebaseio.com",
  projectId: "contactform-4eb14",
  storageBucket: "contactform-4eb14.appspot.com",
  messagingSenderId: "761016789881"
};
firebase.initializeApp(config);

// Refernce message collection

var messageRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactform").addEventListener("submit", submitForm);

//Submit Form
function submitForm(e) {
  e.preventDefault();

  // Get Values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");
  //save message
  saveMessage(name, company, email, phone, message);

  // show alert
  document.querySelector(".alert").style.display = "block";

  // hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactform").reset();
}

// Function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}
// Save message to firebase

function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}

// Set Initial State of the Menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
