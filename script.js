//rumus kelvin => Reamur,celcius,farenheit
//rumus Reamur => celcius,farenheit,kelvin
//rumus celcius => reamur,farenheit,kelvin
//rumus farenheit => celcius,kelvin,reamur


//K -> R = 4/5(K-273)
//K -> C = K -273

//R -> C = 5/4 x R
//R -> K = 5/4 x R + 273
//R -> F = 9/4 x R + 32


//F -> C = 5/9(F - 32)
//F -> R = 4/9 x (F-32)


 function  submit(){
    var opt = document.getElementById("select").value;
    var input = document.getElementById('input').value;
    if(opt == 'Kelvin'){
        let kelvinToReamur = Math.round(4/5 *parseInt((input) - 273));
        document.getElementById('Derajat1').innerText = kelvinToReamur;
        document.getElementById('satuan1').innerText = 'Reamur';


        let KelvinTocelcius = Math.round(parseInt(input) - 273);
        document.getElementById('Derajat2').innerText = KelvinTocelcius;
        document.getElementById('satuan2').innerText = 'Celcius';

        let kelvinToFarenheit = Math.round(9/4 * kelvinToReamur + 32);
        document.getElementById('Derajat3').innerText = kelvinToFarenheit;
        document.getElementById('satuan3').innerText = "Farenheit";
    }else if(opt == "Celcius"){
        let celciusToKelvin = parseInt(input) + 273;
        document.getElementById('Derajat1').innerText = celciusToKelvin;
        document.getElementById('satuan1').innerText = "Kelvin";

        let celciusToReamur = Math.round(4/5 * parseInt(input));
        document.getElementById('Derajat2').innerText = celciusToReamur;
        document.getElementById('satuan2').innerText = "Reamur";

        let celciusToFarenheit = Math.round(9/5 * parseInt(input) + 32);
        document.getElementById('Derajat3').innerText = celciusToFarenheit;
        document.getElementById('satuan3').innerText = "Farenheit"

    }else if(opt == "Reamur"){
        let reamurToKelvin = 5/4 * parseInt(input) + 273;
        document.getElementById('Derajat1').innerText = reamurToKelvin;
        document.getElementById('satuan1').innerText = "Kelvin";

        let reamurToCelcius = 5/4 * parseInt(input);
        document.getElementById('Derajat2').innerText = reamurToCelcius;
        document.getElementById('satuan2').innerText = "Celcius";

        let reamurToFarenheit = Math.round(9/4 * parseInt(input) + 32);
        document.getElementById('Derajat3').innerText = reamurToFarenheit;
        document.getElementById('satuan3').innerText = "Farenheit";
    }else if(opt == "Farenheit"){
        let farenheitToCelcius = Math.round(5/9 * parseInt((input) + 32));
        document.getElementById('Derajat2').innerText = farenheitToCelcius;
        document.getElementById('satuan2').innerText = "Celcius";

        let farenheitToKelvin = parseInt(farenheitToCelcius) + 273;
        document.getElementById('Derajat1').innerText = farenheitToKelvin;
        document.getElementById('satuan1').innerText = "Kelvin";

        let farenheitToReamur = Math.round(4/9 * parseInt(input) - 32);
        document.getElementById('Derajat3').innerText = farenheitToReamur;
        document.getElementById('satuan3').innerText = "Farenheit";
    }

 }