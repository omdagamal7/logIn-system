// ! SELECTORS PAGES
let logInPage = document.querySelector("#logIn");
let signUpPage = document.querySelector("#signUp");

// Variables
let userEmailLogIn = document.querySelector("#userEmailLogIn");
let userPassLogIn = document.querySelector("#userPassLogIn");
let btnLogIn = document.querySelector("#btnLogIn");
let signUpInLogInPage = document.querySelector("#signUpInLogInPage");

// test
// console.log(userEmailLogIn,userPassLogIn,btnLogIn);

// functions
function logIn() {
  let info = JSON.parse(localStorage.getItem("accounts"));
  let mail = [];
  for (var i = 0; i < info.length; i++) {
    var acc = {
      name: info[i].name,
      email:info[i].email,
      password:info[i].password,
    }
    mail.push(acc);
  }
  for (let i = 0; i < mail.length; i++) {
      if (mail[i].email == userEmailLogIn.value  && mail[i].password == userPassLogIn.value) {
          localStorage.setItem("userName", JSON.stringify(mail[i].name));
          location.href = "./html/home.html"
           // redirect me to home
      } else {
        document.querySelector("#invalid").classList.remove("d-none");
      }
      
  }
}
btnLogIn.addEventListener("click",()=>{
  logIn()
})

signUpInLogInPage.addEventListener("click",()=>{
  logInPage.classList.add("d-none")
  signUpPage.classList.remove("d-none")
})



// ! =========== SIGN UP PAGE ===================
// ! =========== SIGN UP PAGE ===================
// ! =========== SIGN UP PAGE ===================
// ! =========== SIGN UP PAGE ===================






let userName = document.querySelector("#userNameSignUp");
let userEmail = document.querySelector("#userEmailSignUp");
let userPass = document.querySelector("#userPassSignUp");
let btnSignUp = document.querySelector("#btnSignUp");



// console.log(userEmail,userName,userPass,btnSignUp);
if (localStorage.getItem("accounts") === null) {
  localStorage.setItem("accounts", JSON.stringify([]));
}

let accs = JSON.parse(localStorage.getItem("accounts"))


function signUp() {
  if (validateEmail() === true && validateName() === true && validatePass() === true) {
    let account = {
      name: userName.value,
      email: userEmail.value,
      password: userPass.value
    }
    accs.push(account);
    localStorage.setItem("accounts",JSON.stringify(accs));
    localStorage.setItem("userName",JSON.stringify(account.name));
    clearForm();
  }else {
    alert("invalid account");
  }
}
btnSignUp.addEventListener("click", function() {
  signUp()
})

function clearForm(){
  userName.value = "";
  userEmail.value = "";
  userPass.value = "";
}

function validateName(){
  let regex = /^([a-z]){3}([a-z0-9]){0,20}$/
  if (regex.test(userName.value) == true) {
    userName.style= 'border-color: green';
    return true
  } else {
    userName.style= 'border-color: red'
    return false
  }
}
function validatePass(){
  let regex = /^([a-z]){3}([a-z0-9]){0,20}$/gmi ;
  if (regex.test(userPass.value) == true) {
    userPass.style= 'border-color: green'
    btnSignUp.addEventListener("click",()=>{
      signUpPage.classList.add("d-none");
      logInPage.classList.remove("d-none");
    })
    return true
  } else {
    userPass.style= 'border-color: red'
    return false
  }
}
function validateEmail(){
  let regex = /^([a-z]+)([0-9]+)?[@][a-z]+[.][a-z]{0,9}/gmi;
  if (regex.test(userEmail.value) == true) {
    userEmail.style= 'border-color: green'
    return true
  } else {
    userEmail.style= 'border-color: red'

    return false
  }
}



userName.addEventListener("input", ()=> {
  validateName();
})
userEmail.addEventListener("input", ()=> {
  validateEmail();
})
userPass.addEventListener("input", ()=> {
  validatePass();
})



// ! =========== HOME PAGE ===================
// ! =========== HOME PAGE ===================
// ! =========== HOME PAGE ===================
// ! =========== HOME PAGE ===================





if (localStorage.getItem('userName')) {
  location.href = "./html/home.html"
} else {
  location.href != './html/home.html'
}
