let myHeading = document.querySelector('h1');

// ajouter la fin du titre
myHeading.textContent += ' from JS';
// changer la couleur du titre
myHeading.style.color = 'purple';

// ajouter un nouveau titre h2 après le h1
let newtitre = document.createElement('h2');
newtitre.textContent = "Welcolme to the DOM";
myHeading.after(newtitre);
newtitre.style.color = 'orange';

// ajouter l'heure actuelle dans sous h2
let newheure = document.createElement('h3');
setInterval(() =>{
    let current = new Date();
    newheure.textContent = current.getHours() + " : " + current.getMinutes() + " : " + current.getSeconds();
}, 1000);
newtitre.after(newheure);

// suprimer uin élément de la liste
let liste = document.querySelector('ul');
liste.removeChild(liste.firstElementChild);

//ajouter un élément à la liste
let newitem = document.createElement('li');
newitem.textContent = "Item 3";
liste.appendChild(newitem);

//Ajouter un événement lors du survol de l'élement caption
let caption = document.querySelector('caption');
caption.addEventListener('mouseover', () => {
    caption.style.color = 'red';
});

//Ajouter des boutons (en javascript) pour faire bouger l'image et le tableau (ajouter ou supprimer la classe 'shake')
// @param (*)
function shakeUnshake(elementId){
    const element = document.getElementById(elementId);
    if (!element) return; // Sécurité si l'id n'existe pas
    if (element.classList.contains('shake')){
        console.log("Stop shaking the element", elementId);
        element.classList.remove('shake');
    } else {
        console.log("Shake the element", elementId);
        element.classList.add('shake');
    }
}


// const shake = (element) => {
//     if (!element.classList.contains('shake')){
//         console.log("Shake the element", element);
//         element.classList.add('shake');
//     }
// }

// const unshake = (element) => {
//     if (element.classList.contains("shake")){
//         console.log("Stop shaking the element", element);
//         element.classList.remove('shake');
//     }
// }

let img = document.querySelector('img');
let btnShakeImg = document.createElement('button');
btnShakeImg.textContent = "Shake Image";
img.after(btnShakeImg);
// let btnShakeStopImg = document.createElement('button');
// btnShakeStopImg.textContent = "Stop Shake Image";
// btnShakeImg.after(btnShakeStopImg);
btnShakeImg.addEventListener('click', () => shakeUnshake('myImg'));
// btnShakeStopImg.addEventListener('click', () => unshake(img));

let table = document.querySelector('table');
let btnShakeTable = document.createElement('button');
btnShakeTable.textContent = "Shake Table";
table.after(btnShakeTable);
// let btnShakeStopTable = document.createElement('button');
// btnShakeStopTable.textContent = "Stop Shake Table";
// btnShakeTable.after(btnShakeStopTable); 
btnShakeTable.addEventListener('click', () => shakeUnshake("table-users"));
// btnShakeStopTable.addEventListener('click', () => unshake(table));


// afficher dans la concole pour débuguer
console.log("Hello world 🤖 from JS")  ;
console.log(myHeading)  ;
