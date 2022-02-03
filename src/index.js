/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//crear una primer imagen.
//agregegar mas imagenes.

//<div class="p-4">
         // <img class="mx-auto" width="300" src="https://randomfox.ca/images/2.jpg" alt="">
       // </div>
import{registerImage} from "./lazy"

const minium= 1;
const maximun= 122;
const random=() => Math.floor(Math.random() * (maximun- minium)) + minium;

const createImageNode = () => {
const container = document.createElement("div");
container.className= "p-4";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width="320";
    imagen.dataset.src =`https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);

    return container;
};

const nuevaImagen = createImageNode();
const mountNode =document.getElementById("images");

const addButton= document.querySelector("button");

const addImage= () => { 
const newImage= createImageNode();
mountNode.append(newImage);
registerImage(newImage);
};

addButton.addEventListener("click", addImage);

