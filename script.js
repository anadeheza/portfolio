function scroll2(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// animacion para que se vean las secciones al scrollear
const obs = new IntersectionObserver((entradas) => {
  entradas.forEach((ent) => {
    // cuando ya es visible
    if (ent.isIntersecting) {
      // si no es visible la hacemos visible
      ent.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15 //15%
});

const elemSinRevelar = document.querySelectorAll('.reveal');
elemSinRevelar.forEach((elem) => {
  obs.observe(elem);
});