function convertTemperature(){

    let value = Number(document.getElementById("temp").value);
    let type = document.getElementById("scale").value;
    let result;

    if(document.getElementById("temp").value==""){
        document.getElementById("result").innerHTML="Please enter temperature";
        return;
    }

    if(type=="CtoF"){
        result=(value*9/5)+32;
        document.getElementById("result").innerHTML=
        "Result : "+result.toFixed(2)+" °F";
    }

    else{
        result=(value-32)*5/9;
        document.getElementById("result").innerHTML=
        "Result : "+result.toFixed(2)+" °C";
    }

}