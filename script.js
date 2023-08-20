const form= document.querySelector("form"); 

form.addEventListener("submit", function(e){// 
    e.preventDefault(); //Não envie os dados

    const name= document.querySelector("#name");

    const value = name.value; //Propriedade value concentra os valores do input

    console.log(value); //Exibir

    alert("Cadastro Realizado com Sucesso!")
   
   
})
   