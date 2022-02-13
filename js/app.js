


//genarate pin number
function getPin(){
    const pin = Math.round(Math.random()*10000);
    if(pin < 1000){
        console.log("less then 1000",pin)

        return getPin();
    }
    return pin;
}

function genaratePin(){
    //getting pin
    const pin = getPin();
    console.log(pin)
    document.getElementById('generate-pin').value = pin;
}

document.getElementById('button-section').addEventListener('click', function (event){
    const clicked = event.target.innerText;
    const inputPin = document.getElementById('input-btn');
    if(isNaN(clicked)){
        if(clicked == "C"){
            inputPin.value = '';
        }else if(clicked == "<"){
            inputPin.value = inputPin.value.substr(1,inputPin.value.length-1);
        }

    }else{
        inputPin.value = inputPin.value + clicked;
        console.log(event.target.innerText);
    }
});