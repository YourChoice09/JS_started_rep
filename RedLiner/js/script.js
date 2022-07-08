// // function setMyNameToAllInputs() {
// //     var InputVadim = 'Vadim';
// //     var InputId1 = "FirstName";
// //     var InputEl1 = document.getElementById(InputId1);
// //     InputEl1.value = InputVadim;

// //     var InputId2 = "LastName";
// //     var InputEl2 = document.getElementById(InputId2);
// //     InputEl2.value = InputVadim;

// //     var InputId3 = "Adress";
// //     var InputEl3 = document.getElementById(InputId3);
// //     InputEl3.value = InputVadim;

// // }

// // function SetMyLastNameToAllInputs() {
// //     var InputMoiseev = 'Moiseev';
// //     var InputId1 = "FirstName";
// //     var InputEl1 = document.getElementById(InputId1);
// //     InputEl1.value = InputMoiseev;


// //     var InputId2 = "LastName";
// //     var InputEl2 = document.getElementById(InputId2);
// //     InputEl2.value = InputMoiseev;


// //     var InputId3 = "Adress";
// //     var InputEl3 = document.getElementById(InputId3);
// //     InputEl3.value = InputMoiseev;
// // }

// var Vadim = 'Vadim';
// var Moiseev = 'Moiseev';

// // function changeValue(ud) {
// //     var Id1 = "FirstName";
// //     var El1 = document.getElementById(Id1);
// //     El1.value = ud;


// //     var Id2 = "LastName";
// //     var El2 = document.getElementById(Id2);
// //     El2.value = ud;


// //     var Id3 = "Adress";
// //     var El3 = document.getElementById(Id3);
// //     El3.value = ud;
// // }

// function changeClass() {
//     var InputId1 = "FirstName";
//     var InputEl1 = document.getElementById(InputId1);
//     InputEl1.className += 'NewCssStyle';


//     var InputId2 = "LastName";
//     var InputEl2 = document.getElementById(InputId2);
//     InputEl2.className += 'NewCssStyle';


//     var InputId3 = "Adress";
//     var InputEl3 = document.getElementById(InputId3);
//     InputEl3.className += 'NewCssStyle';
// }

// function SetNewStyle(FirstName) {
//     FirstName.className += 'NewCssStyle';
// }


// function SayHello() {
//     window.alert('My name is Vadim')
// }

// function SetNewStyleContainer() {
//     SetNewStyle(TextDiv2);
// }

// function sum(a, b) {
//     return a + b;
// }

// var result = sum(1, 2);
// //alert( result );


// function HideElement(id) {
//     id.className += 'HideElement';
// }
// function ShowElement(id) {
//     id.className += 'ShowElement';
// }
// function ShowElementTimer() {
//     ShowElement(TextDiv);
// }




// //changeValue(Moiseev);
// // SetNewStyle(FirstName);
// // SetNewStyle(LastName);
// // SetNewStyle(Adress);
// // SetNewStyle(TextDiv);
// // SetNewStyle(TextDiv2);
// // SetNewStyle(TextArea1);
// // setTimeout(SetNewStyleContainer, 1000);
// // HideElement(TextDiv);
// // setTimeout(ShowElementTimer, 1000);

// var i = 0;
// function timer() {
//     ;
//     Checker.value = i++;
// }
// function timerWrap() {
//     timer(Checker);
// }

// //setInterval(timerWrap, 1000);

// function RemoveElementById(id) {
//     id.remove();
// }

// function AddCssFromId(id, css) {
//     id.className += css;
// }
// function HideElementFromId(id) {
//     id.className += 'NewPClassHide';
// }

// // RemoveElementById(Checker);
// // HideElementFromId(NewPId);

// function ChangeTypeInputPass() {
//     var InputElement = document.getElementById('InputPassword');
//     if (InputElement.type = 'password') {
//         InputElement.type = 'text';
//     }
// }

// function ChangeTypeInputPassToPass() {
//     var InputElement = document.getElementById('InputPassword');
//     if (InputElement.type = 'text') {
//         InputElement.type = 'password';
//     }
// }


// var ButtonPassCl = document.getElementById('ButtonPass');
// ButtonPassCl.addEventListener("mousedown", ChangeTypeInputPass);
// var ButtonPassCl = document.getElementById('ButtonPass');
// ButtonPassCl.addEventListener("mouseup", ChangeTypeInputPassToPass);


// function AddGreenBorder() {
//     var DivElement = document.getElementById('TextTest1');
//     DivElement.className += 'GreenBorder';
// }

// var ButtonPassCl2 = document.getElementById('ButtonPass2');
// ButtonPassCl2.addEventListener("mousedown", AddGreenBorder);

// function SpanValueToInput() {
//     var InputValue = document.getElementById('InputSpanValue')
//     InputValue.value = SpanValueResult;
// }

// var SpanValueResult;

// function GetValueSpan() {
//     var SpanText = document.getElementById('ValueStatus');
//     var SpanValue = SpanText.innerText;
//     console.log(SpanValue);
//     SpanValueResult = SpanValue;
// }

// function HideSpanShowInput() {
//     var SpanId = document.getElementById('ValueStatus');
//     SpanId.className += ' HideElement';
//     var InputId = document.getElementById('InputSpanValue');
//     InputId.className += ' ShowElement';
// }

// // var InputValueResult;
// // function GetValueInputToSpan(){
// //     var InputId = document.getElementById('InputSpanValue');
// //     var InputValue = InputId.value;
// //     InputValueResult = InputValue;
// //     console.log(InputValueResult);
// //     var SpanValue = document.getElementById('ValueStatus');
// //     SpanValue.innerText = InputValueResult;
// // }

// function HideInputShowSpan () {
//     var SpanId = document.getElementById('ValueStatus');
//     SpanId.classList.remove("HideElement");
//     var InputId = document.getElementById('InputSpanValue');
//     InputId.classList.remove("ShowElement");
//     //Ну тут должна быть функция GetValueInputToSpan, но у меня не получается разместить функцию в функцию;\
//     var InputValueResult;
//     var InputId = document.getElementById('InputSpanValue');
//     var InputValue = InputId.value;
//     InputValueResult = InputValue;
//     console.log(InputValueResult);
//     var SpanValue = document.getElementById('ValueStatus');
//     SpanValue.innerText = InputValueResult;
// }

// // GetValueSpan();
// // SpanValueToInput(SpanValueResult);

// var ClickSpan = document.getElementById('ValueStatus');
// ClickSpan.addEventListener('click', HideSpanShowInput);

// var ButtonClick = document.getElementById('ButtonSpan');
// ButtonClick.addEventListener('click', HideInputShowSpan);

// function ChangeInput(){
//     var InputId1 = document.getElementById('InputText1');
//     var InputValue1 = InputId1.value;
//     var InputId2 = document.getElementById('InputText2');
//     var InputValue2 = InputId2.value;
//     var InputValueResult1;
//     var InputValueResult2;
//     InputValueResult1 = InputValue1;
//     InputValueResult2 = InputValue2;
//     InputId1.value = InputValueResult2;
//     InputId2.value = InputValueResult1;
// }

// var ClickButtonForChangeInput = document.getElementById('ButtonInputChange');
// ClickButtonForChangeInput.addEventListener('click', ChangeInput);








let ClickId;
document.addEventListener('click', e => ClickId = e.target.id);


function GetAndCheckValueInput(){
    var ClickElement = document.getElementById(ClickId);
    var ClickElementValue = Number(ClickElement.value);
    if(ClickElementValue > 50){
        ClickElement.classList.add('inputerrorred');
    }
    else {
        ClickElement.classList.remove('inputerrorred');
    }
    console.log (ClickElementValue);
    //document.getElementById('CatBig').src=ClickElementInner;
}

document.addEventListener('keyup', GetAndCheckValueInput);

