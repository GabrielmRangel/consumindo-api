async function buscaEndereco(cep){
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();

        if(consultaCepConvertida.erro){
            throw Error("CEP não encontrado!");
        }
        
        console.log(consultaCepConvertida);

        return consultaCepConvertida;
    } catch (erro) {
        console.log("CEP inválido!");
    }
}

// let ceps = ['01001000', '02556110'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));