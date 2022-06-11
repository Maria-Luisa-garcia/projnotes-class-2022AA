// Incorporando estilos
// a mi bundle
import './styles/style.css'
import './styles/mystyle.css'

console.log("🎁 Webpack Working!!!");

// Default parameters ES6/2015
let show = (m = "😝") => {
  console.log(m);
};
show();

// Promises ES06
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("function resolve");
    }, 10000);
  });
}

async function asyncCall() {
  console.log("Calling asyn function!!!");
  const result = await resolveAfter2Seconds();
  console.log(result); // Imprime "function resolve" en la consola
}

asyncCall();



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  // render manda a renderizar (generar y entregar)
  // la vista al cliente
  // Calculando
  let emojieDataset = ['💻', '👨‍💻', '🎈', '🎄','🦺','🎢','🎁','🚆','🌍','♥'];
  let emojie = emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  res.render('index',
    // Este es el View-Model
    {
    title: 'Express',
    author: 'Garcia Tellez Maria Luisa',
    emojie 
  });
});

module.exports = router;