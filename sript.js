const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".cabecalho-nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

 document.getElementById("orcamento-online").addEventListener("submit",function (validar){
    validar.preventDefault();

    const name = document.getElementById ('inome').value.trim();
    const data = document.getElementById ('idata').value;
    const quant = document.getElementById ('iquant').value;

    if (name === ""){
        alert("Digite um nome")
        return;
    }

    if (data === ""){
        alert("Escolha uma data")
        return;
    }
    if (quant === "" || quant <= 0){
        alert("Defina a quantidade de funcionários")
        return;
    }
    alert("Formulário enviado com sucesso!")
 });


const AbaResultado = document.getElementById("AbaResultado")
const Resultado = document.getElementById("resultado-consulta")
const FormCep = document.getElementById("form-cep")

FormCep.addEventListener("submit",function(exibirResultado){
    exibirResultado.preventDefault();

    const cep = document.getElementById("cep").value.replace(/\D/g,"");//ExReg substitui qualquer caractere que nao for numero por nada ("")

    if (cep === "" || cep.length !== 8 ){
        AbaResultado.classList.add("active")
        Resultado.textContent = "Cep inválido";
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            Resultado.textContent = "CEP não encontrado.";
        } else {
            Resultado.textContent = ` ${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`;
        }
        AbaResultado.classList.add("active");
    })

})