
let actionnumber = 5;


//genarate pin number
function getPin(){
    const pin = Math.round(Math.random()*10000);
    if(pin < 1000){
        // console.log("less then 1000",pin)

        return getPin();
    }
    return pin;
}

function genaratePin(){
    //getting pin
    const pin = getPin();
    // console.log(pin)
    document.getElementById('generate-pin').value = pin;
}

document.getElementById('button-section').addEventListener('click', function (event){
    const clicked = event.target.innerText;
    const inputPin = document.getElementById('input-pin');
    if(isNaN(clicked)){
        if(clicked == "C"){
            inputPin.value = '';
        }else if(clicked == "<"){
            inputPin.value = inputPin.value.substr(1,inputPin.value.length-1);
        }

    }else{
        inputPin.value = inputPin.value + clicked;
        // console.log(event.target.innerText);
    }
});

function matchPin(){
    const genaratedPin = document.getElementById('generate-pin').value;
    const inputPin = document.getElementById('input-pin').value;

    if(genaratedPin == inputPin){
        document.getElementById('success-message').style.display = "block";
        document.getElementById('failure-message').style.display = "none";
        document.getElementById('action-left').style.display = 'none';
        actionnumber = 5;
        document.getElementById('input-pin').value = '';
        document.getElementById('generate-pin').value = '';
    }else{
        document.getElementById('failure-message').style.display = "block";
        document.getElementById('success-message').style.display = "none";
        actionnumber--;
        if(actionnumber < 1){
            document.getElementById('submit-btn').setAttribute( 'disabled',true);
        }
        document.getElementById('action-left-number').innerText = actionnumber;
        document.getElementById('action-left').style.display = 'block';
        
    }
}