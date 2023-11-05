let usrName = document.querySelector('#userName')
let emailEl = document.querySelector('#email')
let pass = document.querySelector('#pass')
let confPass = document.querySelector('#confPass')

let form = document.querySelector('#signup')

let isRequered = (value) => {
    return value == "" ? false : true;
}

let lengthReq = (length, min, max) => {
    return length < min || length > max ? false : true;
}

let emailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

let passStrong = (password) =>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}

function showError(input, message){
    const formfield = input.parentElement;
    formfield.classList.remove('success');
    formfield.classList.add('error');

    const error = formfield.querySelector('small')
    error.textContent = message
}

function showSuccess(input){
    const formfield = input.parentElement;
    formfield.classList.remove('error')
    formfield.classList.add('success')

    let error = formfield.querySelector('small')
    error.textContent = "";
}


function checkUserName(){
    let valid = false;
    let min = 3,
        max = 25;

    let userName = usrName.value.trim();

    if(!isRequered(userName)){
        showError(usrName, 'Give your username...')
    }
    else if(!lengthReq(userName.length, min, max)){
        showError(usrName, 'The name should be 3 to 25 letter long...')
    }
    else{
        showSuccess(usrName)
        return valid = true
    }
    return valid
}



function checkEmail(){
    let valid = false;
    let email = emailEl.value.trim();
    if(!isRequered(email)){
        showError(emailEl, "Email section should'nd be blank...")
    }
    else if(!emailValid(email)){
        showError(emailEl, "Email is not valid...")
    }
    else{
        showSuccess(emailEl)
        return valid = true
    }
    return valid;
}


function checkPassword(){
    let valid = false;
    let password = pass.value.trim();
    if(!isRequered(password)){
        showError(pass, "Password section should'nd be blank...")
    }
    else if(!passStrong(password)){
        showError(pass, "The password should contain atleast 1 small and 1 big letter and should atleast contain a number and a special charecter...")
    }
    else{
        showSuccess(pass)
        return valid = true
    }
    return valid;
}


function confmPassword(){
    let valid = false;
    let confmPassword = confPass.value.trim();
    let password = pass.value.trim();
    if(!isRequered(confmPassword)){
        showError(confPass, "Re enter the password again...")
    }
    else if(password !== confmPassword){
        showError(confPass, "Password is not same as the above...")
    }
    else{
        showSuccess(confPass)
        return valid = true
    }
    return valid;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let isNameValid = checkUserName(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isPassWordConfrm = confmPassword();

    let isFormValid = isNameValid &&
                    isEmailValid &&
                    isPasswordValid &&
                    isPassWordConfrm;

    if(isFormValid){
        //submit to the server if its valid
    }
})

let debounce = (fn, delay= 500) => {
    let timeOutId;
    return(...args) => {
        if(timeOutId){
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay)
    }
}

form.addEventListener('input', debounce((e) => {
    switch(e.target.id){
        case 'userName':
            checkUserName();
            break;

        case 'email' : 
            checkEmail();
            break;

        case 'pass':
            checkPassword();
            break;

        case 'confPass':
            confmPassword();
            break;
    }
}))

