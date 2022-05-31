gsap.defaults({ease:"power4.inOut"});

// individual timelines added to master timeline 
var masterTimeline = gsap.timeline();


var tl = gsap.timeline(); //timeline 1
var tl2 = gsap.timeline({ //timeline 2
    // paused: true,
    yoyo: true,         //reverse timeline2
    repeat: 1,
    repeatDelay: 1
});
var tl3 = gsap.timeline({
    yoyo: true,         //revrse timeline3
    repeat: 1,
    repeatDelay: 2
}); //timeline 3
var tl4 = gsap.timeline(); //timeline 4


// //when timeline 1 (tl) is done, play tl2
// tl.eventCallback("onComplete", function() {
//     tl2.play(0);
//     // tl2.reverse(0) //reverse timeline 2
//   });
  
// //when tl2 is done, play tl3
// tl2.eventCallback("onComplete", function() {
//     tl3.play(0);
//   });
  




// timeline 1 

let timeline1 = () => {
    tl.fromTo('.img3',
    {
    x: innerHeight * -1
    }, 
    {
        x: innerHeight * 0,
        duration: 1,
        ease: 'power4.inOut'
    })

    tl.to('.img2', {
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        opacity: 1,
        duration: 3,
        ease: 'power4.inOut',
        delay: 0.7,
    }, '>-1.2')


    tl.to('.img4', {
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.5
    }, '>-1' )

    tl.from('.img5', {
        y: innerHeight *1,    
    }, '>' )
    tl.fromTo('.red_bg', {
        x: innerHeight * 1},
        {
        x: innerHeight *0.2
            
    }, '>' )


    tl.from('.img6', {
        // 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        x: innerWidth * 1,
        duration: 1
    }, '<' )
    tl.from('.img7', {
        // 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        x: innerWidth * -1,
        duration: 1,
    }, '<' )

    tl.from('.img8',1, {
        x: innerWidth * -1,    
    }, '>-1' )



    tl.from('.img9', {
        duration: 0.3,
        ease: "elastic.out(3, 4.5)",
        scale: 0,
    }, '<0%' )


    tl.to('.group2a img', {
        opacity: 0,
        delay: 4, 
        duration: 0,
        ease: "none"
    }, '>' )

    tl.from('.img13', { 
        x: innerWidth * 0,
        opacity: 0,
        duration: 0.01,   
        delay: 0,
        ease:"none"
    }, '<-1.1%' )


    // Food item carasol
    tl.from('.item1', {
        // x: innerHeight * 1,
        opacity:0,
        duration: 0.1,   
    }, '<2%' )
    tl.to('.item1', {
        x: innerHeight * -1, 
        duration: 1,   
        delay: 1.5
    }, '>' )

    tl.from('.item2', {
        x: innerHeight * 1, 
        duration: 1,   
    }, '<2%' )
    tl.to('.item2', {
        x: innerHeight * 0, 
        duration: 1,   
        delay: 1.5
    }, '>' )

    return tl;
}

//timeline 2
let timeline2 = () => {
    tl2.from('.img10', {
        scale: 0,
        duration: 0.3,
        ease: "elastic.out(2.5, 3.5)",
        delay: 0,
    }, '>')

    return tl2;
}

//timeline 3
let timeline3 = () => {
    tl3.from('.img11', {
        duration: 0.3,
        ease: "elastic.out(2.5, 3.5)",
        scale: 0
    }, '>' )
    return tl3;
}

//timeline 4
let timeline4 = () => {
    tl4.to('.img12', {
        'clip-path': 'circle(70.7% at 50% 50%)',
        duration: 0.3,
    }, '>' )
    tl4.from('.img15', {
        x: innerWidth * -1,
        duration: 1
    }, '<30%')
    tl4.from('.img16', {
        x: innerWidth * 1, 
        duration: 1
    }, '<0%')
    tl4.from('.img14', {
        opacity: 0,
        duration: 1.5,
    }, '<90%')
    tl4.to('.img17', {
        duration: 2.3,
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    }, '<50%')
    return tl4;
}


masterTimeline.add( timeline1() );
masterTimeline.add( timeline2(), "-=4.6" );
masterTimeline.add( timeline3(), "-=2.8" );
masterTimeline.add( timeline4(), "+=0" );


