

let username = document.getElementById('username');

let userAcount = JSON.parse(localStorage.getItem("human"));

if (!userAcount) {
    
    location.replace("../index.html");
   
}
username.innerHTML = `Welcome ${userAcount}`

let logout = document.getElementById("logout");
logout.addEventListener("click", function(){
    localStorage.removeItem("human")
    location.replace("../index.html")
})