let cadena = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolor aliquid, facere accusantium voluptatibus dolorum, exercitationem lorem cupiditate 3eveniet adipisci, itaque quia quaerat non tenetur eos sapiente? At natus sequi excepturi.";

let expReg = RegExp("lorem", "ig" );

let expReg2 =  /lorem{,1}/ig;

// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));


