function sumar ( a , b , ...c ) {
    let resultado = a + b;
    
    c.forEach(function (value, index) {
        resultado += value;
    });

    return resultado;

}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7,8,9));

const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

const arr3 = [...arr1,...arr2];
console.log(arr3);

