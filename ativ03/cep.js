document.getElementById('send').addEventListener('click', () => {
    myCep();
});

function myCep() {
    const cep = document.getElementById('cep');
    if (cep && validateKey(cep.value)) {
        console.log(cep.value);

        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById('logradouro').innerText = `Logradouro: ${data.logradouro}`;
                document.getElementById('bairro').innerText = `Bairro: ${data.bairro}`;
                document.getElementById('cidade').innerText = `Cidade: ${data.localidade}`;
                document.getElementById('uf').innerText = `UF: ${data.uf}`;
                document.getElementById('ibge').innerText = `IBGE: ${data.ibge}`;
                document.getElementById('gia').innerText = `GIA: ${data.gia}`;
                document.getElementById('ddd').innerText = `DDD: ${data.ddd}`;
                document.getElementById('siafi').innerText = `SIAFI: ${data.siafi}`;
                document.getElementById('result').style.display = 'block';
                document.getElementById('error').style.display = 'none';

            })
            .catch((error) => {
                console.log(`Aconteceu algum erro: ${error}`);
            });
    } else {
        console.log('CEP deve conter 8 caracteres.');
        document.getElementById('result').style.display = 'none';
        document.getElementById('error').style.display = 'block';

    }
}

function validateKey(key) {
    return key.length === 8;
}
