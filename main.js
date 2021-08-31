const error = document.getElementById('error');
const email = document.getElementById('email');

document.getElementById('formEmail').addEventListener('submit', (e) => {
  e.preventDefault();
  const check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value === '') {
    error.innerText = 'Oops! Please check your email';
  } else if (email.value.match(check)) {
  } else {
    error.innerText = 'Oops! Please check your email';
  }

  setTimeout(() => {
    error.innerText = '';
  }, 2000);
});
