
function dom(val) {
    return (document.querySelector('.' + val));
}

function mobile() {
    let mobileNum = dom('mobile').value;
    if (mobileNum.charCodeAt(mobileNum.length - 1) >= 48 && mobileNum.charCodeAt(mobileNum.length - 1) <= 57) {
        dom('mobileWarning').style.display = 'none';
        mobileShow();
        return 1;
    } else {
        dom('mobileWarning').style.display = 'block';
        mobileShow();
        return 0;
    }

}
function mobileShow() {
    if (dom('mobile').value.length == 10) {
        dom('mobileNumLength').style.display = 'none';
        return 1;
    } else {
        dom('mobileNumLength').style.display = 'block';
        return 0;
    }
}



function passwordSpecial(index, password) {
    if ((password.charCodeAt(index) >= 32 && password.charCodeAt(index) <= 47) || (password.charCodeAt(index) >= 58 && password.charCodeAt(index) <= 64)) {
        return 1;
    } else {
        return 0;
    }

}

function passwordLength() {
    let password = (dom('password').value);
    if (password.length >= 6) {
        dom('passwordLength').style.display = 'none';
        return 1;
    } else {
        dom('passwordLength').style.display = 'block';
        return 0;
    }
}

function pass() {
    passwordLength();
    let password = (dom('password').value), check;
    for (let i = 0; i < password.length; i++) {
        check = passwordSpecial(i,password);
        if (check == 1) {
            dom('passwordWarning').style.display = 'none';
            return 1;
        } else {
            dom('passwordWarning').style.display = 'block';
        }
    }
}

function passConfirm() {
    let password = (dom('password').value);
    let passwordConfirm = dom('passConfirm').value;
    if (password.localeCompare(passwordConfirm) == 0) {
        dom('passwordConfirmWarning').style.display = 'none';
        return 1;
    } else {
        dom('passwordConfirmWarning').style.display = 'block';
        return 0;
    }
}

function submitForm() {
    let x = 0, entry = [dom('firstname').value, dom('lastname').value, dom('mobile').value, dom('email').value, dom('password').value, dom('passConfirm').value];
    let check  = [passConfirm(), pass(), mobileShow(), mobile(), passwordLength(), 1];
  
    for(let i = 0; i <= entry.length; i++) {
       
        if(entry[i] == "" || check[i] == 0) {
           x = 1;
           break; 
        } else {
            x = 0;
        }
    }
    if (x == 1) {
        alert("Fill all the field correctly");
    } else {
        alert("Form submitted successfully");
    }
}
