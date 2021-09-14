const lista1 = [
    1,
    2,
    4,
    3,
    1,
    1,
    5,
    2,
    1,
    4,
    3,

];


const lista1Count = {};

lista1.map(
    function(elemento){
      if(lista1Count[elemento]){
            lista1Count[elemento] +=1;
      }else{
        lista1Count[elemento] = 1;
        }
        
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        valorAcumulado - nuevoValor;
    }
);


const lista1Array1 = Object.entries(lista1Count).sort(
    function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array1[lista1Array.length - 1];



function calcularModa(lista){
    let listaCount={};
    lista.forEach(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] +=1;
            }else{
                listaCount[elemento]=1;
            }
        }
    );
    let listaArray = Object.entries(listaCount).sort(
        function(elementoA,elementoB){
         return elementoA[1] - elementoB[1];
    
        }
    );
    let moda = listaArray[listaArray.length - 1];
    return moda
}


