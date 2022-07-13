// const { text } = require("express");
let pointer = 0;
let tl = gsap.timeline();
let sImg = [{
    img: "/asset/singers/Mask Group 20.png",
    txt: "Har Har Gange | Arijit Singh | Batti gul meter chalu ",
    link: "/playSong/62c454f0400146eed009a279"
}, {
    img: "/asset/singers/Mask Group 21.png",
    txt: "Kabira | Tochi Raina | Yeh Jawaani hai deewani",
    link: "/playSong/62c3d46836f074aab6996896"
}, {
    img: "/asset/singers/Mask Group 19.png",
    txt: "Rangsari | Kavita Seth & Kanishk Seth | Jugjugg jyoo",
    link: "/playSong/62ce9e32f7c48916b1c603ae"
}]
let singer = document.getElementById("singer");
let start = gsap.timeline();
function s() {
    start.to(".aOvrly:nth-child(2)", {
        top: "-100%",
        duration: 2,
        ease: "slow(0.9, 2, false)",
    }).to(".aOvrly", {
        top: "-100%",
        duration: 1,
        ease: "slow(0.9, .9, false)",
    }, "-=1")
        .from("nav", {
            y: "-80"
        }).from("#search", {
            y: 30,
            opacity: 0,
            padding: 0,

        })
        .from("#lftImg h2", {
            opacity: 0,
            onStart: function () {
                $(function () {
                    $('#lftImg h2').textillate({ in: { effect: 'fadeInUp' } });
                });
            },
            y: 20

        }, "-=.5")
        .from(".sElm", {
            width: 0,
            height: 0,
            stagger: .2,
            // transform: "translate(-50%,-50%)",
            scale: (.5),
            left: "90%",
            duration: 1

        }).from("#glow", {
            opacity: 0
        }).from(".sovly", {
            width: 0

        }).from("#singer", {
            opacity: 0
        }).from("#htxt h2", {
            opacity: 0,
            onStart: function () {
                $(function () {
                    $('#htxt h2').textillate({ in: { effect: 'fadeIn' } });

                });
                slidShow();


            }
        }, "-=1").from("#htxt a", {
            opacity: 0,
            onStart: function () {
                $(function () {
                    $('#htxt a').textillate({ in: { effect: 'fadeIn' } });

                });
            }
        }, "-=.5").from("#number,#sNext", {
            opacity: 0,
            y: 20
        })
}

function textOff(n) {
    // let t = gsap.timeline();
    // t.to("#htxt h2", {
    //     onStart: function () {
    //         $(function () {
    //             $('#htxt h2').textillate({ in: { effect: 'fadeOut' } });

    //         });
    //     },

    // })
    //     .to("#htxt a", {
    //         onStart: function () {
    //             $(function () {
    //                 $('#htxt a').textillate({ in: { effect: 'fadeOut' } });
    //             })
    //         }
    //     })
    gsap.to("#htxt h2", {
        opacity: 0,
    })
    gsap.to("#htxt a", {
        opacity: 0,
    })
}
function textOn() {
    // let t = gsap.timeline();
    gsap.to("#htxt h2", {
        opacity: 1,
    })
    gsap.to("#htxt a", {
        opacity: 1,
    })
    // .to("#htxt h2", {
    //     onStart: function () {
    //             $(function () {
    //                 $('#htxt h2').textillate({ in: { effect: 'fadeIn' } });

    //             });
    //     },

    // })
    // .to("#htxt a", {
    //         onStart: function () {
    //             $(function () {
    //                 $('#htxt a').textillate({ in: { effect: 'fadeIn' } });
    //             })
    //         }
    //     })




}
function imgOff(n) {
    let t = gsap.timeline();
    t.to("#glow", {
        opacity: 0
    })
        .to(".sovly", {
            width: 0
        })
        .to("#singer", {
            opacity: 0,
            onComplete: function () {
                singer.querySelector("img").src = sImg[n].img;
                document.querySelector("#htxt h2").textContent = sImg[n].txt;
                document.querySelector("#htxt a").href = sImg[n].link;



            }
        })
}
function imgOn(n) {
    let t = gsap.timeline();
    t.to("#glow", {
        opacity: 1
    })
        .to(".sovly", {
            width: "90%"
        })
        .to("#singer", {
            opacity: 1,
        })
}
function tran(n) {
    switch (n) {
        case 0: {
            imgOff(n)
            textOff()
            setTimeout(function () {
                gsap.fromTo(`.sElm:nth-child(1)`, {
                    top: "10%",
                    duration: 2,
                }, {
                    width: "60%",
                    height: "60%",
                    left: "80%",
                    top: "50%",
                    zIndex: 1,
                    duration: 1,
                    ease: "slow(0.7, 0.9, false)",
                })
                gsap.to(`.sElm:nth-child(2)`, {
                    width: "100%",
                    height: "100%",
                    left: "0",
                    zIndex: 3,
                    ease: "slow(0.7, 0.7, false)"
                })
                gsap.to(`.sElm:nth-child(3)`, {
                    width: "80%",
                    height: "80%",
                    left: "40%",
                    ease: "slow(0.7, 0.7, false)",
                    zIndex: 2,
                    onComplete: function () {
                        imgOn(n)
                        textOn()

                    }
                })
            }, 1000)
        }
            break;
        case 1: {
            imgOff(n)
            textOff()
            setTimeout(function () {
                gsap.to(`.sElm:nth-child(1)`, {
                    width: "80%",
                    height: "80%",
                    left: "40%",
                    zIndex: 2,
                    ease: "slow(0.7, 0.9, false)",

                })
                gsap.fromTo(`.sElm:nth-child(2)`, {
                    top: "10%",
                    duration: 2
                }, {
                    width: "60%",
                    height: "60%",
                    left: "80%",
                    zIndex: 1,
                    top: "50%",
                    ease: "slow(0.7, 0.9, false)",

                })
                gsap.to(`.sElm:nth-child(3)`, {
                    width: "100%",
                    height: "100%",
                    left: "0%",
                    zIndex: 3,
                    ease: "slow(0.7, 0.9, false)",
                    onComplete: function () {
                        imgOn(n)
                        textOn()

                    }
                })
            }, 1000)

        }
            break;
        case 2: {
            imgOff(n)
            textOff();
            setTimeout(function () {
                gsap.to(`.sElm:nth-child(1)`, {
                    width: "100%",
                    height: "100%",
                    left: "0%",
                    zIndex: 3
                })
                gsap.to(`.sElm:nth-child(2)`, {
                    width: "80%",
                    height: "80%",
                    left: "40%",
                    zIndex: 2
                })
                gsap.fromTo(`.sElm:nth-child(3)`, {
                    top: "10%",
                    duration: 2
                }, {
                    width: "60%",
                    height: "60%",
                    left: "80%",
                    top: '50%',
                    zIndex: 1,
                    onComplete: function () {
                        imgOn(n)
                        textOn()

                    }
                })
            }, 1000)


            // setTimeout(function () {
            //     singer.querySelector("img").src = sImg[n]
            //     imgOn(n)
            // }, 1000)

        }
            break;

    }
    document.getElementById("number").querySelector("h2 span").textContent = `${(n % 3) + 1}`

}
function slidShow() {
    s = setInterval(function () {
        tran(pointer % 3);
        pointer++;

    }, 7000)
}
document.getElementById('sNext').addEventListener("click", function () {
    tran(pointer % 3);
    pointer++

})
s();
