let myImg = document.createElement('img');

myImg.setAttribute(
    "src", "https://snworksceo.imgix.net/dth/aaa11e8a-bf25-4483-aa33-7cf7a5acfc29.sized-1000x1000.png?w=1000");

myImg.style.maxWidth = "100%";
myImg.style.height = "auto";

let myDiv = document.createElement('div');

document.body.append(myDiv);

myDiv.append(myImg);

let myButton = document.createElement('button');

myButton.textContent = 'Remove Image';

document.body.append(myButton);

function imgRemove() {
  myImg.remove();
}

myButton.addEventListener('click', imgRemove);