/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = ["CartMan", "kyle", "kenny", "butters"];
  let cuando = ["ayer", "en mañana", "en la tarde", "antier"];
  let accion = ["cayo", "volo", "mojo", "le cayo un rayo"];
  let que = ["el perro", "el  gato", "el tiburo", "la tortuga", "mi hermana"];

  let randomQuien = quien[Math.floor(Math.random() * quien.length)];
  let randomCuando = cuando[Math.floor(Math.random() * cuando.length)];
  let randomAccion = accion[Math.floor(Math.random() * accion.length)];
  let randomque = que[Math.floor(Math.random() * que.length)];

  console.log(
    randomQuien,
    " " + randomCuando,
    " " + randomAccion,
    " " + randomque,
    ":D"
  );
};
