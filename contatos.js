const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
  if (!emailInput.value.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
    alert('Invalid email address');
    e.preventDefault();
  }
});
