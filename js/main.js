'use strict';

var itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
var uploadBtn = document.querySelector('.fill-input__image');
var uploadInput = document.querySelector('.fill-input__input');
var uploadPhoto = document.querySelector('.card__image');
var fr = new FileReader();
//console.log(itemsSocialMedia);

function reWriteData(e){
  var fillInput = e.currentTarget;
  var targetInput = fillInput.getAttribute('data-stringer');
  var sendCont = document.querySelector('#' + targetInput);

  for (var i =0; i <itemsSocialMedia.length; i++) {
    var itemAttribute = itemsSocialMedia.getAttribute('type');
    console.log(itemAttribute);
    if (itemAttribute === 'number'){
      sendCont.href += fillInput.value;
    } else if (itemAttribute=== 'email'){
      sendCont.href += fillInput.value;
    } else if (itemAttribute === 'url'){
      sendCont.href += fillInput.value;
    } else {
      sendCont.innerHTML = fillInput.value;
    }
}
}


for (var i=0; i<itemsSocialMedia.length; i++){
  itemsSocialMedia[i].addEventListener('keyup', reWriteData);
}


//Cargar Imagen

function mostrarImagen(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  alert('hola');
  console.log(fr.result);
  //uploadPhoto.style.backgroundImage = 'url(' +'"' + fr.result + '"' +');';
  uploadPhoto.style.backgroundImage = 'url(' +'"' + fr.result + '"' +');';

}
function clickInput () {
  uploadInput.click();
}

uploadInput.addEventListener('change', mostrarImagen);
uploadBtn.addEventListener('click', clickInput);


//Skills

function selectSkills(){
  var skillContainer = document.querySelector('.card_skills--list');
  var x = document.querySelector('.select-abilities').value;
  var newSkill = document.createElement('li');
  var newContentSkill = document.createTextNode(x);
  newSkill.appendChild(newContentSkill);
  skillContainer.innerHTML +=newSkill;
  //document.querySelector('.skill').innerHTML = x;
}
var skillsBtn = document.querySelector('.button-abilities')
