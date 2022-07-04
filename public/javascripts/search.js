let srchBx = document.querySelector('#search');
let srchInpt = document.querySelector('#search input');
let srchClose = document.querySelector("#search i");

srchInpt.addEventListener('click', function () {
    srchBx.style.position = 'absolute'
    document.querySelector('#srchOvly').style.display = 'initial';
    srchBx.style.zIndex = 9999;
    srchBx.style.borderRadius = "1em";
    srchBx.style.height = '50vh';
    srchClose.style.display = 'initial'
    srchBx.style.backgroundColor = "#fff";
    // alert('hello')
})
srchInpt.addEventListener('input', function () {
    if (this.value.length !== 0) {
        axios.get(`/searchOptions/${this.value}`).then(function (data) {
            if (data.data) {
                let clutter = "";
                data.data.forEach(function (e) {
                    clutter += `  <div class="sOpsn">
                    <h6>${e.name},${e.artist},${e.album}</h6>
                  </div>`

                })
                document.querySelector(" #srchOptions").innerHTML = clutter;
            }

        })
    } else {
        document.querySelector("#srchOptions").innerHTML = "";
    }

})
srchClose.addEventListener("click", function () {
    document.querySelector('#srchOvly').style.display = 'none';
    srchBx.style.zIndex = 9;
    srchBx.style.borderRadius = "0";
    srchBx.style.height = '5vh';
    srchClose.style.display = 'none'
    srchBx.style.backgroundColor = "transparent";
})