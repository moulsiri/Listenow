
// Menu toggle
let menuBtn = document.getElementById('menu');
let mCls = document.getElementById('menuCls');
let menuSec = document.getElementById('menuSec');
menuBtn.addEventListener('click', function () {
    menuSec.style.height = "100vh";
    mCls.style.display = 'initial';
    document.getElementById('mcontent').style.display = 'initial';
})
mCls.addEventListener("click", function () {
    menuSec.style.height = "0";
    mCls.style.display = 'none';
    document.getElementById('mcontent').style.display = 'none';

})