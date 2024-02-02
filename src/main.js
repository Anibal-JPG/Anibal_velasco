const excuseGenerator = function() {
  let quien = ["CartMan", "kyle", "kenny", "butters"];
  let cuando = ["ayer", "en mañana", "en la tarde", "antier"];
  let accion = ["cayo", "volo", "mojo", "le cayo un rayo"];
  let que = ["el perro", "el  gato", "el tiburo", "la tortuga", "mi hermana"];

  let randomQuien = quien[Math.floor(Math.random() * quien.length)];
  let randomCuando = cuando[Math.floor(Math.random() * cuando.length)];
  let randomAccion = accion[Math.floor(Math.random() * accion.length)];
  let randomque = que[Math.floor(Math.random() * que.length)];

  let returnExcuse =
    randomQuien +
    " " +
    randomCuando +
    " " +
    randomAccion +
    " " +
    randomque +
    ":D";

  return returnExcuse;
};

document.getElementById("excuse").innerHTML = excuseGenerator();

document.getElementById("button_gen").onclick = () => {
  document.getElementById("excuse").innerHTML = excuseGenerator();
};
