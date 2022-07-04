let media1 = window.matchMedia("(max-width:500px)");
let media2 = window.matchMedia("(max-width:900px)");


document.getElementById("sb1Btn").addEventListener("click", function () {
    if (media1.matches) {
        document.getElementById("sb1Sec").style.width = "100%";

    } else if (media2.matches) {
        document.getElementById("sb1Sec").style.width = "50%";


    } else {
        document.getElementById("sb1Sec").style.width = "30%";

    }
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