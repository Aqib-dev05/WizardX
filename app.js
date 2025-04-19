let t1 = gsap.timeline();

t1.from("nav h2", {
  opacity: 0,
  y: 37,
  duration: 1,
}).from(".nav-links a", {
  opacity: 0,
  y: 28,
  duration: 0.5,
  stagger: 0.2,
});

