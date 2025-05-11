const modal = document.querySelector("#adminLoginForm");
const adminButton = document.querySelector("#admin");
const closeButton = document.querySelector("#closeButton");
const overlay = document.querySelector("#overlay");
const login = document.querySelector("#login");
 

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

adminButton.addEventListener("click", function () {
  openModal();
  console.log("Admin button clicked, modal opened.");
});

closeButton.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    console.log("Escape key pressed, modal closed.");
  }
});

login.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (!email || !password) {
    alert("invalid email try again");
  } else if (email === "muktarabdulkedr957@gmail.com" || password === "123") {
    alert("login with successful");
    window.location.href = "hucisa.html";
  } else {
    alert("invalid email ");
  }
});

 
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector("#submit");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const huId = document.querySelector("#hu-id").value;
    const department = document.querySelector("#department").value;
    const year = document.querySelector("#year").value;
    const phone = document.querySelector("#phone").value;
    const reason = document.querySelector("#reason").value;

    alert(
      `Form Submitted Successfully!\n\n` +
        `Username: ${username}\n` +
        `Email: ${email}\n` +
        `HU ID: ${huId}\n` +
        `Department: ${department}\n` +
        `Year: ${year}\n` +
        `Phone: ${phone}\n` +
        `Reason: ${reason}`
    );
  });
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const navContainer = document.getElementById("navContainer");
  navContainer.classList.toggle("active");
});
window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.header');
  const menuItem2 = document.querySelector('.section');

  const stikNav = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  };

  const header = new IntersectionObserver(stikNav, {
    root: null,
    threshold: 0,
    rootMargin: "-50px",
  });

  header.observe(menuItem2);
});

