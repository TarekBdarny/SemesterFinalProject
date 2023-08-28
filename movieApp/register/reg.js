

const container = document.querySelector('.container');

let Wrapper = document.createElement('div');
let ui = document.createElement('div');
ui.classList.add("ui");
// the main two divs for this page
    let blob = document.createElement('div');
    blob.classList.add("blob1");
    let sBlob = document.createElement('div');
    sBlob.classList.add("blob2");
    container.append(blob , sBlob);
    
    let header = document.createElement('h1');
    header.classList.add("header");
    header.innerHTML= "Sign Up";
    ui.appendChild(header);

    let ErrorS = document.createElement('p');
    ErrorS.classList.add('errorText');
    let errorDiv = document.createElement('div');
    errorDiv.classList.add('errors');
    errorDiv.appendChild(ErrorS);
    Wrapper.appendChild(errorDiv);
    let UserSpan = document.createElement('label');
    UserSpan.innerText = "User Name :"
    UserSpan.classList.add('fSpan')
    let inputUserName = document.createElement('input');
     inputUserName.classList.add('user-name');
     inputUserName.placeholder = 'Enter your user name';
    let UserDiv = document.createElement('div');
    UserDiv.classList.add('UserDiv');
    UserDiv.append(UserSpan  ,inputUserName);
    Wrapper.appendChild(UserDiv);

    let EmailSpan = document.createElement('label');
    EmailSpan.innerText = "Email :"
    let EmailInputField = document.createElement('input');
     EmailInputField.classList.add('email-input');
     EmailInputField.placeholder = 'Enter your email';
    let EmailDiv = document.createElement('div');
    EmailDiv.classList.add('EmailDiv');

    EmailDiv.append(EmailSpan, EmailInputField);
    Wrapper.appendChild(EmailDiv);


    let PasswordSpan = document.createElement('label');
    PasswordSpan.innerText = "Password :"
    let  PasswordInputField =document.createElement('input');
     PasswordInputField.classList.add('password-input');
     PasswordInputField.type = 'password';
     PasswordInputField.placeholder = 'Enter your password';
     
    
     let hide_showIcon = document.createElement('i');
     hide_showIcon.className = 'fa-solid fa-eye';
    let PassDiv = document.createElement('div');
    PassDiv.classList.add('PassDiv');
    Wrapper.appendChild(PassDiv);

    
    PassDiv.append(PasswordSpan ,PasswordInputField,hide_showIcon )

    let ConfirmPasswordSpan = document.createElement('label');
    ConfirmPasswordSpan.innerText = "Re inter your Password :"
    let ConfirmPasswordInputField =document.createElement('input');
    ConfirmPasswordInputField.classList.add('rePassword-input');
    ConfirmPasswordInputField.type = 'password';
    ConfirmPasswordInputField.placeholder = 'Re enter your password'

    let ConfirmPassDiv = document.createElement('div');
    ConfirmPassDiv.classList.add('ConfirmPassDiv');
    ConfirmPassDiv.append(ConfirmPasswordSpan , ConfirmPasswordInputField)
    Wrapper.appendChild(ConfirmPassDiv);
    // creating div for the age input
    let ageDiv = document.createElement('div');
    ageDiv.classList.add('ageDiv');
    let ageLabel = document.createElement('label');
    ageLabel.innerHTML = "Enter your age:"
    let ageInputField = document.createElement('input');
    ageInputField.placeholder = "Enter your age";
    ageInputField.classList.add('AgeInputField');
    ageInputField.type = "number";
    ageInputField.max = '60';
    ageInputField.min = '1'
    ageDiv.append(ageLabel,ageInputField);
    Wrapper.appendChild(ageDiv);


    let submitButton  = document.createElement('button');
    submitButton.classList.add('SubmitButton');
    submitButton.innerText = "Sign Up";

    let logInDiv = document.createElement('div');
    logInDiv.classList.add('logIn');
    let goToLoginPage = document.createElement('p');
    goToLoginPage.innerHTML = "Already have a account?"
    let a = document.createElement('a');
    a.classList.add('LoginButton');
    a.innerHTML = "Log in";
    a.href = '#secDiv';
    goToLoginPage.classList.add('goToLoginPage');
    goToLoginPage.appendChild(a);

    Wrapper.appendChild(submitButton);

    logInDiv.appendChild(goToLoginPage);
    Wrapper.appendChild(logInDiv)
    Wrapper.classList.add("wrapper");

    
    ui.appendChild(Wrapper)
    
    container.append(ui);

   // all the above creating the main grid 
const checkUserName = () => 
{
    let userName = document.querySelector('.user-name');
    
    
    if (userName.value === ''){
        ErrorS.innerHTML = "User name is required";
        errorDiv.classList.toggle('showErrorDiv');
        return false;
    }
    else

    if (userName.value.length <8 || userName.value.length >20 )
    {
        ErrorS.innerText = 'user Name must be between 8 and 20 characters'
        errorDiv.classList.toggle('showErrorDiv')
        return false;

     }
     return true;
     
    // if(age <18)
    //     return false;
}

const checkEmail = () =>{
    let email = document.querySelector('.email-input').value;
    
    let at =email.includes('@')
    let dot = email.includes('.');
    if(email === ''){
        ErrorS.innerHTML = 'Email is required';
        errorDiv.classList.toggle('showErrorDiv');
        return false;
    }

    if(at && dot)
        return true;
    else{
        ErrorS.innerHTML = "Email must be real"
        errorDiv.classList.toggle('showErrorDiv');
        return false;

    }
}
const checkPassword = () =>
{
    let pass = document.querySelector('.password-input').value;
    let confirmPassword = document.querySelector('.rePassword-input').value;
    if(pass === ''){
        ErrorS.innerHTML = 'Password is required';
        errorDiv.classList.toggle('showErrorDiv');

        return false;
    }
    if(confirmPassword === ''){
        ErrorS.innerHTML = 'you need to confirm your password';
        errorDiv.classList.toggle('showErrorDiv');
        return false;
    }
    if(pass !== confirmPassword){
        ErrorS.innerHTML = "Password must be the same";
        errorDiv.classList.toggle('showErrorDiv');
        return false;
    }

    
return true;

}
const checkAge = () =>
{
    let age = document.querySelector('.AgeInputField').value;
    if(age !=='' && age >=18) return true;
    ErrorS.innerText = 'Age must be above 18';
    errorDiv.classList.toggle('showErrorDiv');
    return false;
}
const validInformation = () =>
{
    if(checkUserName() && checkEmail() &&checkPassword()&& checkAge())
        return true;
return false;

}
let user = {};
submitButton.addEventListener('click', () =>{
   
      if(!validInformation())
      { 
          submitButton.classList.toggle('shake-horizontal');
          return;
      }
    ErrorS.innerHTML = "";
     user = {
        userName : inputUserName.value,
        email : EmailInputField.value,
        password : PasswordInputField.value,
        age : ageInputField.value
    }
    console.log(user)
    const inputs = document.querySelectorAll('.container input').forEach(input => input.value ='');
    // container.classList.toggle('slide-out-blurred-top');
    ErrorS.innerHTML = "You all set up Redirecting ..."
     setTimeout(() => window.location.assign('#secDiv'),1500)
      
      
})
// a function to show the password 
hide_showIcon.addEventListener('click', () =>{
    PasswordInputField.type = PasswordInputField.type === "password" ? "text" : "password";
    ConfirmPasswordInputField.type = ConfirmPasswordInputField.type === "password" ? "text" : "password";
    hide_showIcon.className = `fa-solid fa-eye${PasswordInputField.type === "password" ? "" : "-slash"}`

})
// main div for the login panel

const checkData = () =>
{
    if (emailInput.value === '' ||passInput.value === '' ){
        loginError.innerHTML = "input cant be empty";
        return;
    }
    const loginData = {
         email : emailInput.value,
         pass : passInput.value
        }
        for (let i = 0; i <1 ; i++) {
            if (user.email === loginData.email && user.password === loginData.pass || loginData.email === 'Demo@example.com' && loginData.pass ==='Demo123'){
                console.log('success');
                loginError.innerHTML = "Moving to movie page...";
                let inputs = document.querySelectorAll('.loginWrapper input').forEach(input => input.value = "") 
                setTimeout(() => window.location.assign('/movieApp/movie/index.html'),1000);
            }
            else{
                loginError.innerHTML = "Please Enter a valid data";
            }
        }
        
    }
    const loginSection = document.querySelector('.loginWrapper');

let blob3 = document.createElement('div');
    blob3.classList.add("blob3");
    let blob4 = document.createElement('div');
    blob4.classList.add("blob4");
    loginSection.append(blob3 , blob4);
    
let LoginHeader = document.createElement('h1');
LoginHeader.classList.add('header');
LoginHeader.innerHTML= "Sign in";
loginSection.appendChild(LoginHeader);
const loginError = document.createElement('p');
loginError.classList.add('errorText');
loginSection.appendChild(loginError)
const emailLabel = document.createElement('label');
emailLabel.innerHTML = "Email Address";
emailLabel.classList.add('fSpan');

const emailInput = document.createElement('input');
emailInput.placeholder = "Enter Your Email";
emailInput.classList.add('user-name')

loginSection.append(emailLabel , emailInput);

const passLabel = document.createElement('label');
passLabel.innerHTML =  "Password ";
passLabel.classList.add('fSpan');
const passInput = document.createElement('input');
passInput.placeholder = "Enter Your password";
passInput.type = 'password';
passInput.classList.add('password-input');

loginSection.append(passLabel , passInput);

const signInButton = document.createElement('button');
signInButton.innerHTML = "Sign In";
signInButton.classList.add('SubmitButton')
signInButton.onclick =  checkData;
loginSection.append(signInButton);


const logDiv = document.createElement('div');
logDiv.classList.add('logIn');
const goToRegisterPage = document.createElement('p');
goToRegisterPage.innerHTML = "Don't have an account?"
const aSingUp = document.createElement('a');
aSingUp.classList.add('LoginButton');
aSingUp.innerHTML = "Sign Up";
aSingUp.href = "#container"
goToRegisterPage.classList.add('goToRegisterPage');
goToRegisterPage.appendChild(aSingUp);

loginSection.appendChild(goToRegisterPage);





