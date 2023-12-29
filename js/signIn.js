


let signIn = document.getElementById('signin')
let signinEmail = document.getElementById('signinEmail')
let signinPassword = document.getElementById('signinPassword')



let userAcount = JSON.parse(localStorage.getItem("signup"))

signIn.addEventListener('click',function(){
    if(localStorage.getItem("signup") != null){
        for (let i = 0; i < userAcount.length; i++) {
            if(signinEmail.value == userAcount[i].email && 
                signinPassword.value == userAcount[i].password){

                    
                localStorage.setItem("human",JSON.stringify(userAcount[i]. userName))
                location.replace("../home.html")  

            }else if(signinEmail.value == "" || 
                signinPassword.value == ""){
                window.alert("error");
            }
            
        }
    }

})

// userAcount
