

// document.querySelectorAll(".imgContainer")
// .forEach(function(elem){
//     gsap.to(elem , {

//         width:"100%",
//         duration:2,
//         ease : Expo.easeInOut
//     })
    
// });

var tl= gsap.timeline(
    {
        repeat : -1
    }
);
tl.to(".imgContainer" , {

    width:"100%",
    duration:2,
    ease : Expo.easeInOut,
    stagger:2
},'a')

tl.to(".heading>h1" , {

    left:"0",
    duration:1,
    opacity:1,
    ease : Expo.easeInOut,
    stagger:2
} ,'a')

tl.to(".para>p" , {

    left:"20",
    opacity:1,
    ease : Expo.easeInOut,
    stagger:2
} ,'a')


tl.to(".heading>h1" , {

    top:"-110%",
    delay:2,
    ease : Expo.easeInOut,
    stagger:2
},'a')
tl.to(".para>p" , {

    top:"-100%",
    delay:2,
    ease : Expo.easeInOut,
    stagger:2
},'a')