
function ChangeInput(){
    var InputId1 = document.getElementById('InputText1');
    var InputValue1 = InputId1.value;
    var InputId2 = document.getElementById('InputText2');
    var InputValue2 = InputId2.value;
    var InputValueResult1;
    var InputValueResult2;
    InputValueResult1 = InputValue1;
    InputValueResult2 = InputValue2;
    InputId1.value = InputValueResult2;
    InputId2.value = InputValueResult1;
}

var ClickButtonForChangeInput = document.getElementById('ButtonInputChange');
ClickButtonForChangeInput.addEventListener('click', ChangeInput);

