/* =========================================================
   OPENING SEQUENCE
========================================================= */

const introSequence = document.getElementById("introSequence");
const skipIntro = document.getElementById("skipIntro");

function finishIntro() {
  if (!introSequence) return;

  introSequence.classList.add("finished");
  document.body.classList.remove("intro-active");
}

/*
  The intro currently plays every time the page is refreshed.

  Later, if you want it to play ONLY on the visitor's first
  entrance, we can save that information in the browser.
*/
if (introSequence) {
  setTimeout(finishIntro, 5100);
}

if (skipIntro) {
  skipIntro.addEventListener("click", finishIntro);
}


/* =========================================================
   SCROLL REVEALS
========================================================= */

const revealTargets = document.querySelectorAll(
  ".current > *, " +
  ".home-strip > *, " +
  ".page > *, " +
  ".editorial-card, " +
  ".archive-row, " +
  ".researcher, " +
  ".film-card, " +
  ".dossier-card, " +
  ".clue"
);

revealTargets.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12,
  }
);

revealTargets.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   CONSTELLATION MOTION
========================================================= */

const constellation = document.getElementById("constellation");

window.addEventListener("scroll", () => {

  if (!constellation) return;

  const scrollY = window.scrollY;

  /*
    Very small movement only.
    We want old observatory chart, not floating-space website.
  */
  constellation.style.transform =
    `translateY(${scrollY * 0.025}px) rotate(${scrollY * 0.002}deg)`;

});


/* =========================================================
   CONSTELLATION HOVER LABEL
========================================================= */

const constellationInfo =
  document.getElementById("constellationInfo");

const constellationTargets =
  document.querySelectorAll(
    ".archive-star, .dossier-body"
  );


function updateConstellationInfo(target) {

  if (!constellationInfo) return;

  const month = target.dataset.month;
  const number = target.dataset.number;
  const title = target.dataset.title;

  constellationInfo.classList.add("changing");

  setTimeout(() => {

    const indexElement =
      constellationInfo.querySelector(".constellation-index");

    const titleElement =
      constellationInfo.querySelector("strong");

    const helperElement =
      constellationInfo.querySelector("small");

    if (number === "CLASSIFIED") {

      indexElement.textContent =
        `${month} / ${number}`;

      titleElement.textContent =
        title;

      helperElement.textContent =
        "Click to inspect released evidence";

    } else {

      indexElement.textContent =
        `${number} / ${month} MMXXVI`;

      titleElement.textContent =
        title;

      helperElement.textContent =
        target.classList.contains("future")
          ? "Inquiry not yet opened"
          : "Click to enter inquiry";

    }

    constellationInfo.classList.remove("changing");

  }, 150);

}


constellationTargets.forEach((target) => {

  target.addEventListener("mouseenter", () => {
    updateConstellationInfo(target);
  });

  target.addEventListener("focus", () => {
    updateConstellationInfo(target);
  });

});


/* =========================================================
   FUTURE MONTHS
========================================================= */

const futureStars =
  document.querySelectorAll(".archive-star.future");

futureStars.forEach((star) => {

  star.addEventListener("click", () => {

    updateConstellationInfo(star);

  });

});


/* =========================================================
   HOW TO ACTIVATE SEPTEMBER LATER
========================================================= */

/*

When September arrives:

1. Create:

   inquiries/september-2026.html

2. In index.html replace the September BUTTON with:

   <a
     class="archive-star completed star-sep"
     href="inquiries/september-2026.html"
     data-month="SEPTEMBER"
     data-number="002"
     data-title="YOUR SEPTEMBER TOPIC">

     <span class="star-core"></span>
     <span class="star-label">SEP</span>

   </a>

3. Change the homepage Current Inquiry section to September.

You do NOT need to redesign the constellation.

The new star simply becomes active.

*/
