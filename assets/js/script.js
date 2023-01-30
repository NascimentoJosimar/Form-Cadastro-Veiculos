const handleSubmit = (event) => {
    event.preventDefault();

    const placa = document.querySelector('input[placa=placa]').value;
    const ordem = document.querySelector('input[ordem=ordem]').value;
    const renavam = document.querySelector('input[renavam=renavam]').value;
    const chassi = document.querySelector('input[chassi=chassi]').value;
    const modelo = document.querySelector('input[modelo=modelo]').value;
    const marca = document.querySelector('input[marca=marca]').value;
    const anoMod = document.querySelector('input[anoMod=anoMod]').value;
    const anoFab = document.querySelector('input[anoFab=anoFab]').value;
    const cor = document.querySelector('input[cor=cor]').value;
    const lotacao = document.querySelector('input[lotacao=lotacao]').value;
    const combustivel = document.querySelector('input[combustivel=combustivel]').value;
    const proprietario = document.querySelector('input[proprietario=proprietario]').value;
    const cidade = document.querySelector('input[cidade=cidade]').value;
    const estado = document.querySelector('input[estado=estado]').value;
    const obs = document.querySelector('input[obs=obs]').value;

    fetch('https://api.sheetmonkey.io/form/7qLPe34ArUq7vZ6Ws2autt', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa, ordem, renavam, chassi, modelo, marca, anoMod, anoFab, cor, lotacao, combustivel, proprietario, cidade, estado, obs})
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);