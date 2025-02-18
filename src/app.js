import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extns = ['com', 'es', 'net', 'us', 'io'];

function Genetator(params) {
  
}

window.onload = function() {
  //write your code here

  for (let pro of pronoun){
    for(let ad of adj){
      for (let nou of noun){
        for(let ext of extns)
        {
          let subString= `${pro}${ad}${nou}.${ext}`
        console.log(subString)
        }
      }
    }
  }

};
