// codigo del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
 return lado * 4;
}
perimetroCuadrado()
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado){
    return lado * lado;
}  
areaCuadrado()

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();
// codigo del triangulo

console.group("Triangulos");

// const ladoTriangulo1  =   6;
// const ladoTriangulo2  =   6;
// const baseTriangulo   =   4;


// console.log(
//     "Los lados del triangulo miden: "
//      + ladoTriangulo1
//      + "cm," 
//      + ladoTriangulo2
//      + "cm, " 
//      + baseTriangulo
//      + "cm"
//      );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm" );

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

perimetroTriangulo();

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm" ); 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
areaTriangulo();

console.groupEnd();

// codigo del circulo

console.group("Criculos")

// Radio


// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");


// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

diametroCirculo();
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI


const PI = Math.PI;
// console.log(PI);


// circunferencia
function perimetroCirculo(radio){
  
  return diametroCirculo(radio) * PI;
} 

perimetroCirculo();
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Área


function areaCirculo(radio){

    return (radio * radio) * PI;
} 

areaCirculo();
// console.log("El area del circulo es: " + areaCirculo + "cm^²");




console.groupEnd()



// Aqui interactuamos con el HTML para el cuadrado

function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
   
    const area = areaCuadrado(value);
    alert(area);
}


// Aqui interactuamos con el HTML para el triangulo

function calcularPerimetroTriangulo(){

    const lado1 = Number(document.getElementById("lado1").value),
          lado2 = Number(document.getElementById("lado2").value),
          base  = Number(document.getElementById("base").value),
          perimetro = perimetroTriangulo(lado1, lado2, base);
    
    alert("el perimetro del triangulo es: " + perimetro);
   }
   
   function calcularAreaTriangulo(){
       const base = Number(document.getElementById("base").value),
             altura = Number(document.getElementById("altura").value),      
             area = areaTriangulo(base, altura);
       alert(area);
   }

   // Aqui interactuamos con el HTML para el triangulo

   function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
   
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
   }
   
   function calcularAreaCirculo(){
       const input = document.getElementById("InputCirculo");
       const value = input.value;
      
       const area = areaCirculo(value);
       alert(area);
   }