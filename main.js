

// FAQ Section
         const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = button.classList.contains('active');

      // Close all
      faqQuestions.forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.style.maxHeight = null;
        btn.nextElementSibling.style.paddingBottom = 0;
      });

      // Open selected
      if (!isOpen) {
        button.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingBottom = "15px";
      }
    });
  });

  // Dynamic copyright in footer
document.getElementById("copy-year").textContent = new Date().getFullYear();

// Form validation
    const form = document.getElementById('contactForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', function(e) {
      let isValid = true;

      // Reset error messages
      nameError.style.display = 'none';
      emailError.style.display = 'none';
      messageError.style.display = 'none';

      // Check if name is empty
      if (nameField.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
      }

      // Check if email is empty or invalid
      if (emailField.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailField.value)) {
        emailError.style.display = 'block';
        isValid = false;
      }

      // Check if message is empty
      if (messageField.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
      }

      // If any validation fails, prevent form submission
      if (!isValid) {
        e.preventDefault();
      } else {
        alert('Message sent successfully!');
        form.reset();
      }
    });

    const backToTopButton = document.getElementById('back-to-top');

// Show the button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function animateValue(id, start, end, duration, suffix = "") {
      const obj = document.getElementById(id);
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    window.addEventListener('DOMContentLoaded', () => {
      animateValue("allStudents", 0, 1350, 2000, "+");
      animateValue("totalStaff", 0, 84, 1800);
      animateValue("classSize", 0, 42, 1600);
      animateValue("legacy", 0, 95, 2200, "+");
    });


 // Toggle menu for mobile
    function toggleMenu() {
      const nav = document.getElementById('navMenu');
      nav.classList.toggle('show');
}
    function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function (event) {
    const dropdown = document.getElementById('ourSchoolDropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

    // Change header background on scroll
    window.addEventListener('scroll', () => {
      const header = document.getElementById('mainHeader');
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});