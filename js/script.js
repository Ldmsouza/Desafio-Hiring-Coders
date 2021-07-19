function cadastrar(){
    var recebeNome = document.getElementById("inputNome");
    var recebeEmail = document.getElementById("inputEmail");

    var dados = JSON.parse(localStorage.getItem("dadosFormulario"));

    if(dados == null){
        localStorage.getItem("dadosFormulario", "[]");
        dados = [];
    }

    var auxRegistro = {
        recebeNome: inputNome.value,
        recebeEmail: inputEmail.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosForm",JSON.stringify(dados));
    // console.log(auxRegistro);
    alert("Cadastrado com sucesso!")

    
    recebeNome.value ="";
    recebeEmail.value="";

}