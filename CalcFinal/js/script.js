


var ButtonPlus = document.getElementById('CalcPlus');
var ButtonMinus = document.getElementById('CalcMinus');
var ButtonMnozh = document.getElementById('CalcMnozh');
var ButtonDel = document.getElementById('CalcDel');

var Input1 = document.getElementById('InputFirst');
var Input2 = document.getElementById('InputTwice');

function GetNumber1(){
    return Number(Input1.value)
}
function GetNumber2(){
    return Number(Input1.value)
}

function AllSetting(OperationCode){
    if (OperationCode === '+'){
        var result = GetNumber1() + GetNumber2();
        console.log(result);
    }
    else if (OperationCode === '-'){
        var result = GetNumber1() - GetNumber2();
        console.log(result);
    } 
    else if (OperationCode === '*'){
        var result = GetNumber1() * GetNumber2();
        console.log(result);
    }
    else if (OperationCode === '/'){
        var result = GetNumber1() / GetNumber2();
        console.log(result);
    }
}

// function CalcPlus(){
//     AllSetting('+');
// }
// function CalcMinus(){
//     AllSetting('-');
// }
// function CalcMnozh(){
//     AllSetting('*');
// }
// function CalcDel(){
//     AllSetting('/');
// }

// ButtonPlus.addEventListener('click', OnOperationButtonClick);
// ButtonMinus.addEventListener('click', OnOperationButtonClick);
// ButtonMnozh.addEventListener('click', OnOperationButtonClick);
// ButtonDel.addEventListener('click', OnOperationButtonClick);


function OnOperationButtonClick(eventObject){
    var ClickElement = eventObject.currentTarget;
    var ValueObject = ClickElement.innerHTML;
    AllSetting(ValueObject);
}

var OperationButtons = [ButtonPlus, ButtonMinus, ButtonMnozh, ButtonDel];



for (let i = 0; i < OperationButtons.length; i++) {
    let button = OperationButtons[i];
    button.addEventListener('click', OnOperationButtonClick);
}