let wel = document.querySelector("#welcomeMessage");
let signOut = document.querySelector("#signOut")
// if there is loged in user show the message
if (localStorage.getItem('userName')) {
  let message = JSON.parse(localStorage.getItem("userName"));
  wel.innerHTML = `Welcome ${message}`;
  // location.href = "home.html"
} 
signOut.addEventListener("click",()=>{
  logOut();
})
function logOut() {
  localStorage.removeItem("userName");
}
