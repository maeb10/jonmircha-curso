// import countDown from "./dom/cuenta_regresiva.js";
// import hamburgerMenu from "./dom/menu_hamburguesa.js";
// import { digitalClock, alarm} from "./dom/reloj.js";
// import { shortcuts } from "./dom/teclado.js";

import responsiveMedia from "./dom/objeto_responsive.js";
import contactFormValidations from "./dom/validaciones_formulario.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    // hamburgerMenu(".panel-btn", ".panel", ".menu a");
    // digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    // alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    // countDown("countdown", "June 21, 2021 23:16:10", "Se termino la cuenta regresiva");
    // responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91&t=1903s" target="_blank" rel="noopener">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    // responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://goo.gl/maps/7vMQUvCGq9ynSLup6" target="_blank" rel="noopener">Ver mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15050.64616117933!2d-99.1676647!3d19.4270245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c366f0e2de02ff7!2sThe%20Angel%20of%20Independence!5e0!3m2!1sen!2smx!4v1624502864257!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
    contactFormValidations();
});

d.addEventListener("keydown", e => {
    // shortcuts(e);
})



