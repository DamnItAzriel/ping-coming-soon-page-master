var submitBtn = document.getElementById('submitEmail');
var feedback = document.getElementById('feedback');
console.log(submitBtn);
console.log(feedback);

function validateEmail(e){
    e.preventDefault();
    var email = document.getElementById('email');
    if(email.value === ""){
        feedback.textContent = "Please enter a email address";
        email.focus();
        feedback.changeClass = 'error';
    } else if(!emailIsValid(email.value)){
        feedback.textContent = "Please enter a valid email address";
        email.focus();
        feedback.changeClass = 'error';
    } else {
        feedback.textContent = "";
        feedback.changeClass = "ok"
    }
}

function emailIsValid(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validateEmail, false);
