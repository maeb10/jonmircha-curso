const $enlace = document.querySelector("a");

console.log($enlace);

console.log($enlace.getAttribute("href"));
console.log($enlace.href);
console.log($enlace.hasAttribute("href"));
$enlace.setAttribute("data-description", "DOM");
$enlace.setAttribute("class", "prueba");
$enlace.removeAttribute("class");

console.log($enlace.dataset);
console.log($enlace.dataset.description);

$enlace.dataset.description = "Otro DOM";
console.log($enlace.dataset.description);

// Modificando las clases del elemento
$enlace.classList.contains("rotate-45");
$enlace.classList.toggle("rotate-45");
$enlace.classList.add("rotate-45");
$enlace.classList.remove("rotate-45");
$enlace.classList.replace("rotate-45", "nueva-clase");

// Taversing DOM o recorriendo el DOM
$enlace.children
$enlace.children[0]
$enlace.parentElement
$enlace.firstElementChild
$enlace.lastElementChild
$enlace.previousElementSibling
$enlace.nextElementSibling
$enlace.closest("div")  // Te trae el ancestro mas cercano (hacia arriba)