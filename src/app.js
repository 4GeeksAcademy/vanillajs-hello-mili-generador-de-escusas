import "bootstrap";
import "./style.css";

window.onload = function() {
  // 1. Creamos las listas de palabras (Arrays)
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  // 2. Elegimos un número al azar para cada lista
  // Math.random() genera un número entre 0 y 1 (ej: 0.5)
  // Se multiplica por el largo de la lista y Math.floor lo redondea a un número entero
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  // 3. Juntamos todas las piezas en una sola frase
  let finalExcuse = who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex];

  // 4. Buscamos el elemento en el HTML con el id "excuse" y le metemos la frase
  document.querySelector("#excuse").innerHTML = finalExcuse;
};