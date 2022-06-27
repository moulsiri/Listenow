document.getElementById("sb1Btn").addEventListener("click", function () {
    document.getElementById("sb1Sec").style.width = "30%";
    document.getElementById("user").style.display = "flex";
    document.querySelector("#sb1Cls").style.display = "initial";
    document.getElementById("sb1Sec").style.position = "fixed";

})
document.querySelector("#sb1Cls").addEventListener("click", function () {
    document.getElementById("sb1Sec").style.width = "0%";
    document.getElementById("user").style.display = "none";
    document.querySelector("#sb1Cls").style.display = "none";
    document.getElementById("sb1Sec").style.position = "absolute";

})