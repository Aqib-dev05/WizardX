function timeline1() {
  let t1 = gsap.timeline();
  t1.from("nav h2", {
    opacity: 0,
    y: 40,
    duration: 1,
  });
  t1.from(".nav-links span", {
    opacity: 0,
    y: 28,
    duration: 0.35,
    stagger: 0.2,
  });
  t1.from(".banner .left h1", {
    x: -300,
    opacity: 0,
    duration: 0.3,
  });
  t1.from(".banner .left p", {
    x: -100,
    opacity: 0,
    duration: 0.2,
  });
  t1.from(".banner .left button", {
    x: -100,
    opacity: 0,
    duration: 0.2,
  });
  t1.from(".banner .right img", {
    opacity: 0,
    duration: 0.35,
    x: 200,
  });
  t1.from(".agency-logos img", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.1,
  });
}

function timeline3() {
  let t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-container",
      scroller: "body",
      scrub: 1,
      start: "top 75%",
      end: "top 48%",
    },
  });

  t3.from(
    ".ser1",
    {
      x: -300,
      opacity: 0,
    },
    "aaa"
  );
  t3.from(
    ".ser2",
    {
      x: 300,
      opacity: 0,
    },
    "aaa"
  );
}

function timeline2() {
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-section .service-intro",
      scroller: "body",
      scrub: 1,
      start: "top 85%",
      end: "top 65%",
    },
  });

  t2.from(
    ".service-section .service-intro h3",
    {
      x: -400,
      opacity: 0,
    },
    "ss"
  );
  t2.from(
    ".service-section .service-intro p",
    {
      x: 400,
      opacity: 0,
    },
    "ss"
  );
}

function timeline4() {
  let t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec2",
      scroller: "body",
      scrub: 1,
      start: "top 70%",
      end: "top 40%",
    },
  });

  t4.from(".txt h3", {
    x: -200,
    opacity: 0,
    duration: 0.3,
  });
  t4.from(".txt p", {
    x: -150,
    opacity: 0,
    duration: 0.2,
  });
  t4.from(".txt button", {
    x: -100,
    opacity: 0,
    duration: 0.2,
  });
  t4.from(".b2-image img", {
    opacity: 0,
    scale: 0,
  });
}

function timeline5() {
  let t5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro2",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 67%",
    },
  });

  t5.from(
    ".intro2 h3",
    {
      x: -400,
      opacity: 0,
    },
    "ss"
  );
  t5.from(
    ".intro2 p",
    {
      x: 400,
      opacity: 0,
    },
    "ss"
  );
}

function timeline6() {
  let t6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-box",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%",
    },
  });

  t6.from(
    ".inner p",
    {
      y: -400,
      opacity: 0,
    },
    "wq"
  );
  t6.from(
    ".inner span",
    {
      y: 400,
      opacity: 0,
    },
    "wq"
  );
}

timeline1();
timeline2();
timeline3();
timeline4();
timeline5();
timeline6();
