// Timeline
const tl = gsap.timeline({
    defaults: {duration: 0.75, ease: "Power3.easeOut"},
});

// Hero Img
tl.fromTo('.hero-img', {scale: 1.3, borderRadius: '0rem'}, 
    {
        scale: 1,
        borderRadius: '2rem',
        delay: 0.35,
        duration: 2.5,
        ease: 'elastic.out(1.5, 1)',
    }
);

// First Line
tl.fromTo('.cta1', {x: '100%', opacity: 0.5}, {x: 0, opacity: 1}, '<20%');
tl.fromTo('.cta3', {x: '-100%', opacity: 0.5}, {x: 0, opacity: 1}, '<20%');
tl.fromTo('.cta2', {y: '100%', opacity: 0.5}, {y: 0, opacity: 1}, '<20%');

// Second Line
tl.fromTo('.cta4', {x: '100%', opacity: 0.5}, {x: 0, opacity: 1}, '<20%');
tl.fromTo('.cta6', {x: '-100%', opacity: 0.5}, {x: 0, opacity: 1}, '<20%');
tl.fromTo('.cta5', {y: '100%', opacity: 0.5}, {y: 0, opacity: 1}, '<20%');

// button
tl.fromTo('.cta-btn', {y: 20, opacity: 0}, {y: 0, opacity: 1}, '<');


// SplitText Vanilla JS + gsap
const logo = document.querySelector('.logo');
// split the logo into individual letters with .split('')
const letters = logo.textContent.split("");
// set content to an empty string to get rid of two texts
logo.textContent = "";
// loop over the letters and add a span to them
letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + '</span>';
});
// set letters to display: inline-block so we can manipulate the x and y values
gsap.set('.letter', {display: "inline-block"});
// fromTo the ltters to move them up and stagger them with a ease bounce
gsap.fromTo('.letter', {y: '100%'}, {y: 0, delay: 2, stagger: 0.05, ease: "back.out(3)"})