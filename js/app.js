// General Variables
const menuBtn = document.querySelector('.navbar__menu-btn')
const menuDropdown = document.querySelector('.dropdown-menu')
// Functions 
function toggleNav() {
    menuBtn.addEventListener('click', () => {
        menuDropdown.classList.toggle('show')
    })
} toggleNav()
function showPopup(img) {
    document.getElementById('popup-image').src = img.src;
    document.getElementById('popup-title').textContent = img.parentElement.nextElementSibling.querySelector('.blog__title').textContent;
    document.querySelector('.popup').style.display = 'block';
  }

  function closePopup() {
    document.querySelector('.popup').style.display = 'none';
  }


  document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    document.getElementById('emailError').textContent = '';
  
    // Fetch input value
    var emailInput = document.getElementById('emailInput').value.trim();
  
    if (emailInput === '') {
      document.getElementById('emailError').textContent = 'Email is required';
      return;
    }
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      document.getElementById('emailError').textContent = 'Invalid email format';
      return;
    }

    console.log('Valid email:', emailInput);
  });


