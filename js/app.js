


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
    document.getElementById('generate-pin-input').value = pin;
}