
const revealTargets = document.querySelectorAll(
  ".current > *, .home-strip > *, .page > *, .editorial-card, .archive-row, .researcher, .film-card, .dossier-card, .clue"
);
revealTargets.forEach(el => el.classList.add("reveal"));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealTargets.forEach(el => observer.observe(el));

const orbit = document.querySelector(".orbit-wrap");
if(orbit){
  window.addEventListener("scroll",()=>{
    const y=window.scrollY;
    orbit.style.transform=`translateY(${y*.07}px) rotate(${y*.014}deg)`;
  });
}
