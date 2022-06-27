// Login Signup 
let sb1Btn = document.getElementById("sb1Btn");
let sb1Sec = document.getElementById("sb1Sec");
let sb1Content = document.getElementById("sb1Content");
let logWin = document.getElementById("logWin");
let signWin = document.getElementById("signWin");
let logBtn = document.getElementById("logBtn");
let signBtn = document.getElementById("signBtn");
let sb1Cls = document.querySelector("#sb1Cls");
sb1Btn.addEventListener("click", function () {
    sb1Sec.style.width = "40%";
    sb1Content.style.display = "initial";
    sb1Cls.style.display = 'initial';
})
sb1Cls.addEventListener("click", function () {
    sb1Sec.style.width = 0;
    sb1Content.style.display = "none";
    sb1Cls.style.display = "none";
})
signBtn.addEventListener("click", function () {
    signWin.style.left = 0;
    logWin.style.left = "100%";

    // alert("hello")

})
logBtn.addEventListener("click", function () {
    signWin.style.left = "100%";
    logWin.style.left = "0";
    // alert("hello")

})
