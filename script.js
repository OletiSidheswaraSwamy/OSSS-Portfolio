emailjs.init("M-7ttA5fGlL0ZJMPt");

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  emailjs.send("service_8lq13gm", "template_671e1c7", {
      from_name: name,
      reply_to: email,
      message: message
  })
  .then(function() {
    alert("Message sent successfully!");
  }, function(error) {
    alert("Failed to send. Try again!");
  });
});
const typedText = document.querySelector(".typing-text");

const roles = [
  "Web Developer",
  "UI/UX Designer",
  "MERN Developer"
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[i];

  if (!isDeleting) {
    typedText.textContent = currentRole.substring(0, j + 1);
    j++;

    if (j === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } 
  else {
    typedText.textContent = currentRole.substring(0, j - 1);
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 120);
}

typeEffect();







const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#navbar .nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const top = section.offsetTop - 100;  
    const height = section.offsetHeight;

    if (pageYOffset >= top && pageYOffset < top + height) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();              
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('active');
});
