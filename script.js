const close = document.getElementById('cls-btn');
const messbox = document.getElementById('mess-box');
const formgroup = document.getElementById('form-group');

close.addEventListener("click", () => {
  messbox.style.display = 'none';
  formgroup.style.display = 'block';
});

//const nameInput = document.getElementById('name');
//const login = document.getElementById('login-btn');

/*login.addEventListener("click", function() {
  const userName = nameInput.value;
  console.log(`storing username: ${userName}`);
  //localStorage.setItem('userName', userName);
  window.location.href = `/happyNewYear/hpny.html?name=${userName}`;
});*/
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  if (name) {
    window.location.href = `hpny.html?name=${encodeURIComponent(name)}`;
  } else {
    window.location.href = `hpny.html?name=friend`;
  }
});
