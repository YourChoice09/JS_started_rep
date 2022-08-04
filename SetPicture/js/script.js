let ClickId;
document.addEventListener('click', e => ClickId = e.target.id);


function GetAndSetPictureNew(){
    var ClickElement = document.getElementById(ClickId);
    var ClickElementInner = ClickElement.src;
    console.log (ClickElementInner);
    document.getElementById('CatBig').src=ClickElementInner;
}

document.addEventListener('click', GetAndSetPictureNew);
