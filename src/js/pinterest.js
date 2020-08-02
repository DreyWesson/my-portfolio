// Original design: https://dribbble.com/shots/6508828-Architecture-App/attachments

const pageChange = new TimelineLite({ paused: true });
const initAnim = new TimelineLite({ paused: true });

initAnim.staggerFrom(
  ".footer a",
  0.1,
  {
    y: -150,
    opacity: 1,
    ease: Cubic.easeInOut,
    clearProps: "all",
  },
  0.1
);

initAnim.play();

pageChange.fromTo(
  ".header",
  0.1,
  {
    opacity: 1,
    filter: "blur(1px)",
    clearProps: "all",
  },
  {
    opacity: 0,
    filter: "blur(4px)",
    zIndex: "-1",
  }
);

pageChange.staggerTo(".heading", 0.2, {
  opacity: 0,
  ease: Cubic.easeInOut,
});

pageChange.staggerTo(".container .grid-card", 0.2, {
  opacity: 0,
  filter: "blur(4px)",
  scale: 0.8,
  zIndex: "-1",
  position: "relative",
});

pageChange.staggerTo(
  ".footer a",
  0.3,
  {
    y: 150,
    opacity: 0,
    ease: Cubic.easeInOut,
  },
  0.1
);
pageChange.fromTo(
  ".-back",
  0.4,
  {
    opacity: 0,
    ease: Cubic.easeInOut,
  },
  {
    opacity: 1,
    ease: Cubic.easeInOut,
    display: "block",
  }
);

// 2
pageChange.fromTo(
  ".container > .image",
  0.5,
  {
    opacity: 0,
    filter: "blur(4px)",
    scale: 0.9,
  },
  {
    opacity: 1,
    filter: "blur(1px)",
    scale: 1,
    zIndex: 0,
  }
);
pageChange.fromTo(
  ".container-description",
  0.6,
  {
    y: 150,
    opacity: 0,
    ease: Cubic.easeInOut,
  },
  {
    y: 0,
    opacity: 1,
    ease: Cubic.easeInOut,
    display: "block",
  }
);

pageChange.fromTo(
  ".header.-withsub, .description",
  0.6,
  {
    opacity: 0,
  },
  {
    opacity: 1,
    clearProps: "all",
  }
);

pageChange.staggerTo(".container .grid-card.-details", 0.7, {
  opacity: 1,
  filter: "blur(1)",
  scale: 1,
  clearProps: "all",
});

$(".grid-card").on("click", function () {
  pageChange.play();
});

$(".-back").on("click", function () {
  pageChange.reverse();
});
