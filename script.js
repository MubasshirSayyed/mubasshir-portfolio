/* =========================================
   MUBASSHIR SAYYED PORTFOLIO
   INTERACTIVE EFFECTS
   ========================================= */

/* =========================================
   EXISTING CURSOR GLOW
   ========================================= */

const glow = document.querySelector(".cursor-glow");

window.addEventListener(
  "mousemove",
  (e) => {
    if (!glow) return;

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  },
  { passive: true },
);

/* =========================================
   ANCHOR / MENU
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelector(".menu")?.blur();
  });
});

/* =========================================
   PHOTO 3D HOVER + DYNAMIC GREEN GLOW
   ========================================= */

const portrait = document.querySelector(".portrait-frame");
const heroRight = document.querySelector(".hero-right");

if (portrait && heroRight) {
  portrait.addEventListener(
    "mousemove",
    (e) => {
      const portraitRect = portrait.getBoundingClientRect();

      const heroRect = heroRight.getBoundingClientRect();

      /* Cursor inside photo */

      const x = e.clientX - portraitRect.left;

      const y = e.clientY - portraitRect.top;

      /* Cursor inside hero-right */

      const glowX = e.clientX - heroRect.left;

      const glowY = e.clientY - heroRect.top;

      /* 3D tilt */

      const percentX = x / portraitRect.width;

      const percentY = y / portraitRect.height;

      const rotateY = (percentX - 0.5) * 6;

      const rotateX = (0.5 - percentY) * 6;

      /* Set glow position */

      heroRight.style.setProperty("--photo-glow-x", `${glowX}px`);

      heroRight.style.setProperty("--photo-glow-y", `${glowY}px`);

      /* Set tilt */

      portrait.style.setProperty("--tilt-x", `${rotateX}deg`);

      portrait.style.setProperty("--tilt-y", `${rotateY}deg`);

      portrait.classList.add("photo-active");

      heroRight.classList.add("photo-area-active");
    },
    { passive: true },
  );

  portrait.addEventListener("mouseleave", () => {
    portrait.style.setProperty("--tilt-x", "0deg");

    portrait.style.setProperty("--tilt-y", "0deg");

    portrait.classList.remove("photo-active");

    heroRight.classList.remove("photo-area-active");
  });
}

/* =========================================
   SCROLL REVEAL
   ========================================= */

const revealItems = document.querySelectorAll(
  ".work-item, .project, .skill-row, .edu-grid > div",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("revealed");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealItems.forEach((item) => {
    item.classList.add("scroll-reveal");

    revealObserver.observe(item);
  });
}

/* =========================================
   BUTTON MICRO INTERACTION
   ========================================= */

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

