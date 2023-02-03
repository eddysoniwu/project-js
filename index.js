let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
email = id("email")
password = id("password")
form = id("form")

errorMsg = classes("error")
successicon = classes("success-icon");
failureicon = classes("failure-icon");

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    engine(username, 0, "username cannot be blank",failureicon);
    engine(email, 1, "Email cannot be blank",failureicon);
    engine(password, 2, "password cannot be blank", failureicon)
});

let engine = (id, serial, message) => {
    if(id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "3% solid red"
        //icons
        successicon[serial].style.opacity = "0";
    }
    else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "3% solid green";
        //icons
        successicon[serial].style.opacity = "1";
    }
    console.log(serial)
}

let sideview = document.querySelector('.sideview')
document.querySelector('.bars>i').addEventListener('click', (e) => {
    if(!e.target.classList.contains('fa-times')) {
        e.target.classList.add('fa-times')
        e.target.classList.remove('fa-bars')
        sideview.style.width = '20rem'
    }else {
        e.target.classList.remove('fa-times')
        e.target.classList.add('fa-bars')
        sideview.style.width = '0'
    }
})



