// Select the dropdown toggle and dropdown content
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.category-nav-Dropdown');

// Add a click event listener to toggle the dropdown content
dropdownToggle.addEventListener('click', function (event) {
  event.preventDefault();
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if clicked outside of it
window.addEventListener('click', function (e) {
  if (!dropdownToggle.contains(e.target) && !dropdownContent.contains(e.target)) {
    dropdownContent.style.display = 'none';
  }
});

window.onscroll = function() {
  const backToTop = document.querySelector('.back-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTop.style.display = "block";
  } else {
      backToTop.style.display = "none";
  }
};

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const arrow = this.querySelector('.arrow');
    const plus = this.querySelector('.plus');

    // Toggle answer visibility
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

    // Toggle arrow and plus/minus icons
    arrow.classList.toggle('open');
    plus.classList.toggle('open');

    // Change + to - manually for better control
    plus.textContent = plus.textContent === '+' ? '-' : '+';
  });
});

function toggleMenu() {
  const navHome = document.getElementById('nav-home');
  const menuIcon = document.querySelector('.menu-icon i');
  const ecommerceHome = document.querySelector('.ecommerce-home');

  if (navHome.style.maxHeight && navHome.style.maxHeight !== '0px') {
      // Close the dropdown
      navHome.style.maxHeight = '0';
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
      ecommerceHome.style.transform = 'translateY(0)'; // Move the image back up
  } else {
      // Open the dropdown
      navHome.style.maxHeight = '500px'; // Set height to accommodate all links
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
      ecommerceHome.style.transform = 'translateY(100px)'; // Move the image down
  }
}