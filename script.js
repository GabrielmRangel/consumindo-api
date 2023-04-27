async function buscaEndereco(cep){
    let msgErro = document.getElementById('erro');
    msgErro.innerHTML = "";

    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();

        if(consultaCepConvertida.erro){
            throw Error("CEP não encontrado!");
        }

        let cidade = document.getElementById('cidade');
        let endereco = document.getElementById('endereco');
        let estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade;
        endereco.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        return consultaCepConvertida;
    } catch (erro) {
        msgErro.innerHTML = `<p>CEP inválido.</p>`
        console.log("CEP inválido!");
    }
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
