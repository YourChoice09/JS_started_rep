function SpanValueToInput() {
    var InputValue = document.getElementById('InputSpanValue')
    InputValue.value = SpanValueResult;
}

var SpanValueResult;

function GetValueSpan() {
    var SpanText = document.getElementById('ValueStatus');
    var SpanValue = SpanText.innerText;
    console.log(SpanValue);
    SpanValueResult = SpanValue;
}

function HideSpanShowInput() {
    var SpanId = document.getElementById('ValueStatus');
    SpanId.className += ' HideElement';
    var InputId = document.getElementById('InputSpanValue');
    InputId.className += ' ShowElement';
}

function HideInputShowSpan () {
    var SpanId = document.getElementById('ValueStatus');
    SpanId.classList.remove("HideElement");
    var InputId = document.getElementById('InputSpanValue');
    InputId.classList.remove("ShowElement");
    //Ну тут должна быть функция GetValueInputToSpan, но у меня не получается разместить функцию в функцию;\
    var InputValueResult;
    var InputId = document.getElementById('InputSpanValue');
    var InputValue = InputId.value;
    InputValueResult = InputValue;
    console.log(InputValueResult);
    var SpanValue = document.getElementById('ValueStatus');
    SpanValue.innerText = InputValueResult;
}

GetValueSpan();
SpanValueToInput(SpanValueResult);

var ClickSpan = document.getElementById('ValueStatus');
ClickSpan.addEventListener('click', HideSpanShowInput);

var ButtonClick = document.getElementById('ButtonSpan');
ButtonClick.addEventListener('click', HideInputShowSpan);

