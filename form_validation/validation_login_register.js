var register= document.getElementById("register")
var login1 = document.getElementById("login")

function login(){
    register.style.display="none"
    login1.style.display="block"
}

function reg(){ 
    register.style.display="block"
    login1.style.display="none"
}


// ---------------------------------------------------

function sub1(){
    var name1 = document.getElementById("Login_Ename")
    var pw1 = document.getElementById("Login_pw1")
    
    var name1val = name1.value.trim()
    var pw1val = pw1.value.trim()

    var error1 = document.getElementById("error1")
    var error2 = document.getElementById("error2")

    if(name1val ==""){
        name1.style.borderColor="red"
        error1.textContent="*user name is required*"
        error1.style.color="red"
    }
    else if(name1val.length<5){
        name1.style.borderColor="red"
        error1.textContent="*user name must have 5 characters*"
        error1.style.color="red"
    }
    else{
        name1.style.borderColor="green"
        error1.textContent=""
    }


    if(pw1val == ""){
        pw1.style.borderColor="red"
        error2.textContent="*user password is required*"
        error2.style.color="red"
    }
    else if(pw1val.length<5){
        pw1.style.borderColor="red"
        error2.textContent="*user password must have 8 characters*"
        error2.style.color="red"
    }
    else{
        pw1.style.borderColor="green"
        error2.textContent=""
    }

    
}


function foc(){
    var blur1= document.getElementById("Login_Ename")
    var blur1val = blur1.value.trim()
    var error1 = document.getElementById("error1")
   
    if(blur1val== ""){
        blur1.style.borderColor="red"
        error1.style.color="red"
        error1.textContent="User Name is Mandatory"
    }
    else{
        error1.textContent=""
    }
}

function foc1(){
    var blur2 = document.getElementById("Login_pw1")
    var blur2val = blur2.value.trim()
    var error2 = document.getElementById("error2")

    if(blur2val == ""){
        blur2.style.borderColor="red"
        error2.style.color="red"
        error2.textContent="User password is Mandatory"   
    }
    else{
        error2.textContent=""
    }
}

// -------------------------------


    

function sub2(){
    var name2 = document.getElementById("Login_Ename2")
    var email = document.getElementById("email")
    var pw2 = document.getElementById("Login_pw2")
    var cpw = document.getElementById("cpassword")

    
    var name2val = name2.value.trim()
    var emailval = email.value.trim()
    var pw2val = pw2.value.trim()
    var cpwval = cpw.value.trim()

    var error3 = document.getElementById("error3")
    var error4 = document.getElementById("error4")
    var error5 = document.getElementById("error5")
    var error6 = document.getElementById("error6")

    if(name2val ==""){
        name2.style.borderColor="red"
        error3.textContent="*user name is required*"
        error3.style.color="red"
    }
    else if(name2val.length<5){
        name2.style.borderColor="red"
        error3.textContent="*user name must have 5 characters*"
        error3.style.color="red"
    }
    else{
        name2.style.borderColor="green"
        error3.textContent=""
    }


    if(emailval==""){
        email.style.borderColor="red"
        error4.textContent="*email is required*"
        error4.style.color="red"
    }
    else if(!emailval.includes("@gmail.com")){
        email.style.borderColor="red"
        error4.textContent="*Please enter valid email*"
        error4.style.color="red"
    }
    else{
        email.style.borderColor="green"
        error4.textContent=""
    }


    if(pw2val == ""){
        pw2.style.borderColor="red"
        error5.textContent="*password is required*"
        error5.style.color="red"
    }

    else if(pw2val.length<8){
        pw2.style.borderColor="red"
        error5.textContent="*password must have 8 characters*"
        error5.style.color="red"
    }

    else{
        pw2.style.borderColor="green"
        error5.textContent=""
    }


    if(cpwval == ""){
        cpw.style.borderColor="red"
        error6.textContent="*Confirm password is required*"
        error6.style.color="red"
    }
    else if(pw2val !== cpwval){
        cpw.style.borderColor="red"
        error6.textContent="*password and confirm should not matched*"
        error6.style.color="red"
    }
    else{
        cpw.style.borderColor="green"
        error6.textContent=""
    }
}



function foc3(){
    var name2 = document.getElementById("Login_Ename2")
    var name2val = name2.value.trim()
    var error3 = document.getElementById("error3")

    if(name2val==""){
        name2.style.borderColor="red"
        error3.textContent="*User name is Mandatory*"
        error3.style.color="red"
    }
    else{
        error3.textContent=""
    }
}

function foc4(){
    var email = document.getElementById("email")
    var emailval = email.value.trim()
    var error4 = document.getElementById("error4")
    if(emailval == ""){
        email.style.borderColor="red"
        error4.textContent="*Email is Mandatory*"
        error4.style.color="red"
    }
    else{
        error4.textContent=""
    }
}

function foc5(){
    var pw2 = document.getElementById("Login_pw2")
    var pw2val = pw2.value.trim()
    var error5 = document.getElementById("error5")
    if(pw2val ==""){
        pw2.style.borderColor="red"
        error5.textContent="*Password is Mandatory*"
        error5.style.color="red"
    }
    else{
        error5.textContent=""
    }
}

function foc6(){
    var cpw = document.getElementById("cpassword")
    var cpwval = cpw.value.trim()
    var error6 = document.getElementById("error6")
    if(cpwval ==""){
        cpw.style.borderColor="red"
        error6.textContent="*Confirm Password is Mandatory*"
        error6.style.color="red"
    }
    else{
        error6.textContent=""
    }
}


