
// función anónima autoejecutable
(function () {
    console.log("Mi primer IIFE");
    
})();

(function (d, w, c) {
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    console.log(c);
    c.log("Este es un console.log");
    
})(document, window, console);