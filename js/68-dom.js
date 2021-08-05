/* const $figure         = document.createElement("figure"),
      $img            = document.createElement("img"),
      $figcaption     = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("Animals"),
      $cards          = document.querySelector(".cards");

$figure.classList.add("card");
$img.src = "https://placeimg.com/200/200/animals";      
$img.alt = "Animals"; 
$figcaption.appendChild($figcaptionText);

$figure.appendChild($img);
$figure.appendChild($figcaption);

$cards.appendChild($figure);

// Para mejorar nuestro rendimiento de nuestro sitio web
// podemos utilizar fragmentos,los cuales solo hace una inserción en 
// el DOM.
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

$ul3      = document.createElement("ul");

$fragment = document.createDocumentFragment();

meses.forEach( mes => {
    $li     = document.createElement("li");
    $li.textContent = mes; 
    $fragment.appendChild($li);
} );

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); 


const $cards    = document.querySelector(".cards"),
      $template = document.getElementById("template-card").content,
      $fragment = document.createDocumentFragment(),
      cardContent = [
        {
            title: "Tecnología",
            img:"https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img:"https://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img:"https://placeimg.com/200/200/arch"
        },
        {
            title: "Gente",
            img:"https://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img:"https://placeimg.com/200/200/nature"
        }
    ];

cardContent.forEach( el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
    
} );

$cards.appendChild($fragment);

const $cards   = document.querySelector(".cards"),
      $newCard = document.createElement("figure"),
      $cloneCards = $cards.cloneNode(true) ;

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// Old Style
// $cards.replaceChild($newCard, $cards.children[2])
// $cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard, $cards.firstElementChild);

// document.body.appendChild($cloneCards);
*/

// New Style
/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

/* const $cards   = document.querySelector(".cards"),
      $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contentCard );
$newCard.querySelector("figcaption").insertAdjacentText("beforeend","Any");

// $cards.insertAdjacentElement("afterbegin",$newCard);
$cards.querySelectorAll(".card")[1].insertAdjacentElement("beforebegin", $newCard); */

// $cards.prepend($newCard); Lo agrega como primer hijo
// $cards.apend($newCard); Lo agrega como el último hijo
// $cards.before($newCard); Lo agrega como hermano anterior
// $cards.after($newCard); Lo agrega como hermana posterior

// event handler (manejador de evento), es la función que ese ejecuta en un evento
// En la funcion manejadora de evento podemos acceder a un objeto que se llama event
function holaMundo(){
    // event.target contiene el elemento que origino el evento
alert("Hola Mundo");
console.log(event);
}

function saludar(nombre = "desconocid@"){
    alert(`Hola ${nombre}`)
    console.log(event);
    
}
const $eventoSemantico = document.getElementById("evento-semantico"),
      $eventoMultiple = document.getElementById("evento-multiple"),
      $eventoRemover = document.getElementById("evento-remover");

// Toda función que se convierte en un manejador de eventos 
// no puede recibir parámetros, solamente el evento en sí.
/* $eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e){
    alert("Hola Mundo Manejador de Eventos Semántico")
    console.log(e);
    console.log(event);
    
};

$eventoMultiple.addEventListener("click", holaMundo );
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Multiples")
    console.log(e.type);
    console.log(e.target);
    
} );
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Mario");
});

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
}

$eventoRemover.addEventListener("dblclick", removerDobleClick); */

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e){
    console.log(`Hola ${this.className} el click lo origino ${e.target.className}`);
    // e.stopPropagation();
}

document.addEventListener("click", (e) => {
    
    if( e.target.matches(".eventos-flujo div") ){
        flujoEventos.apply(e.target, [e]);
    }
    if( e.target.matches(".eventos-flujo a") ){
        e.preventDefault();
        alert("Hola desde el enlace");
    }
    
})

/* $divsEventos.forEach( div => {
    // Fase de burbuja
    div.addEventListener("click", flujoEventos, false);
    // Fase de captura de mas externo al mas interno
    // div.addEventListener("click", flujoEventos, true);
    // div.addEventListener("click", flujoEventos, {capture:false,once:true });
}); */

/* BOM Browser Object Model: Métodos y objetos que cuelgan directamente de window */

window.addEventListener('resize', e => {
    console.clear();
    console.log('----------EVENTO RESIZE----------');
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    
});
window.addEventListener('scroll', e =>{
    console.clear();
    console.log('----------EVENTO RESIZE----------');
    console.log(window.scrollX);
    console.log(window.scrollY);
})
window.addEventListener('load', e =>{
    console.clear();
    console.log('----------EVENTO LOAD----------');
    console.log(window.screenX);
    console.log(window.screenY);
})