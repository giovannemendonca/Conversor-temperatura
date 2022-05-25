function mudarTexto() {
    let op = parseInt(document.getElementById("opcao").value);
    switch (op) {
        case 1:
            break;
        case 2:
            document.getElementById("botao").innerHTML = "Converter para °F";
            break;
        case 3:
            document.getElementById("botao").innerHTML = "Converter para °K";
            break;
        default:
            break;
    }
}

function conversorTemperatura() {

    let opcao = parseInt(document.getElementById("opcao").value);
    let Temperatura = document.getElementById("temp").value;


    if (Temperatura === '') {
        document.getElementById("exibe").innerHTML = "Favor, selecionar a temperatura a ser convertida no campo Selecione a Unidade";
    }

    else {
        switch (opcao) {
            case 1:
                document.getElementById("exibe").innerHTML = "Selecione uma opção para conversão! ";
                break;
            case 2:
                celsius_Farenheit(Temperatura);
                break;
            case 3:
                celsius_Kelvin(Temperatura);
                break;
            default:
                break;
        }
    }

    function celsius_Farenheit(tempC) {
        let tempCelsius = tempC;
        let tempFarenheit = (9 * tempCelsius) / 5 + 32;
        document.getElementById("exibe").innerHTML = `${tempFarenheit} °F`;
    }

    function celsius_Kelvin(tempC) {
        let tempCelsius = parseFloat(tempC);
        let tempKelvin = tempCelsius + 273.15;
        document.getElementById("exibe").innerHTML = `${tempKelvin} °K`;
    }

}   
