// all inputs
let signupName = document.getElementById('signupName')
let signupEmail = document.getElementById('signupEmail')
let signupPassword = document.getElementById('signupPassword')
let signUp = document.getElementById('signup')




let arrey = [];

if ( localStorage.getItem("signup") != null){
    arrey = JSON.parse(localStorage.getItem("signup"))
}else{
    arrey = [];
}


signUp.addEventListener('click', function(){
    
    if(signupName.value == "" || signupPassword.value == "" || signupEmail.value == ""){

 window.alert("error");
    }else{
        if(chekEmail() == false ){
            let person = {
                userName: signupName.value,
                password: signupPassword.value,
                email: signupEmail.value,
                
            }
            arrey.push(person);
            localStorage.setItem("signup",JSON.stringify(arrey));
        
            location.replace("../index.html")  
            clearData()
        }
    }
   
})


function chekEmail() {
    for (let i = 0; i < arrey.length; i++) {
        if(arrey[i].email == signupEmail.value){
            return true;
        }
        
    }
    return false;
}


function clearData() {
    signupName.value = "";
    signupPassword.value = "";
     signupEmail.value = "";
}

//0000000000000000000000000000000000
