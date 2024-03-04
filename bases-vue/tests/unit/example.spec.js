describe('Example Component', () => {
  test('Debe de ser mayor a 10',() => {
    //Arreglar
    let valor = 9; //<--Sujeto de pruebas
    //Estimulo
    valor += 2;
    //Observar
    if(valor > 10){
      //TODO: todo bien
    }else{
      throw `${valor} no es mayor a 10`
    }
  })
})