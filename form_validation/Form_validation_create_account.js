  function sub1(event){

    event.preventDefault()

    var name2 = document.getElementById("Login_Ename")
    var email = document.getElementById("email")
    var pw2 = document.getElementById("password")
    var cpw = document.getElementById("cpassword")

    var name2val = name2.value.trim()
    var emailval = email.value.trim()
    var pw2val = pw2.value.trim()
    var cpwval = cpw.value.trim()

    var error1 = document.getElementById("error1")
    var error2 = document.getElementById("error2")
    var error3 = document.getElementById("error3")
    var error4 = document.getElementById("error4")

    if(name2val ==""){
        name2.style.borderColor="red"
        error1.textContent="*user name is required*"
        error1.style.color="red"
    }
    else if(name2val.length<5){
        name2.style.borderColor="red"
        error1.textContent="*user name must have 5 characters*"
        error1.style.color="red"
    }
    else{
        name2.style.borderColor="green"
        error1.textContent=""
    }


    if(emailval==""){
        email.style.borderColor="red"
        error2.textContent="*email is required*"
        error2.style.color="red"
    }
    else if(!emailval.includes("@gmail.com")){
        email.style.borderColor="red"
        error2.textContent="*Please enter valid email*"
        error2.style.color="red"
    }
    else{
        email.style.borderColor="green"
        error2.textContent=""
    }


    if(pw2val == ""){
        pw2.style.borderColor="red"
        error3.textContent="*password is required*"
        error3.style.color="red"
    }

    else if(pw2val.length<8){
        pw2.style.borderColor="red"
        error3.textContent="*password must have 8 characters*"
        error3.style.color="red"
    }

    else{
        pw2.style.borderColor="green"
        error3.textContent=""
    }


    if(cpwval == ""){
        cpw.style.borderColor="red"
        error4.textContent="*Confirm password is required*"
        error4.style.color="red"
    }
    else if(pw2val !== cpwval){
        cpw.style.borderColor="red"
        error4.textContent="*password and confirm should not matched*"
        error4.style.color="red"
    }
    else{
        cpw.style.borderColor="green"
        error4.textContent="*Password and confirm password matched*"
        error4.style.color="green"
    }
}



function foc1(){
    var name2 = document.getElementById("Login_Ename")
    var name2val = name2.value.trim()
    var error1 = document.getElementById("error1")

    if(name2val==""){
        name2.style.borderColor="red"
        error1.textContent="*User name is Mandatory*"
        error1.style.color="red"
    }
    else{
        error1.textContent=""
    }
}

function foc2(){
    var email = document.getElementById("email")
    var emailval = email.value.trim()
    var error2 = document.getElementById("error2")
    if(emailval == ""){
        email.style.borderColor="red"
        error2.textContent="*Email is Mandatory*"
        error2.style.color="red"
    }
    else{
        error2.textContent=""
    }
}

function foc3(){
    var pw2 = document.getElementById("password")
    var pw2val = pw2.value.trim()
    var error3 = document.getElementById("error3")
    if(pw2val ==""){
        pw2.style.borderColor="red"
        error3.textContent="*Password is Mandatory*"
        error3.style.color="red"
    }
    else{
        error3.textContent=""
    }
}

function foc4(){
    var cpw = document.getElementById("cpassword")
    var cpwval = cpw.value.trim()
    var error4 = document.getElementById("error4")
    if(cpwval ==""){
        cpw.style.borderColor="red"
        error4.textContent="*Confirm Password is Mandatory*"
        error4.style.color="red"
    }
    else{
        error4.textContent=""
    }
}