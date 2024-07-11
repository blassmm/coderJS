let errores = 0;

let preg1 = parseInt(prompt("Cuanto es 10x10? "));

if (preg1 !== 100) {
  errores++;
  alert("Incorrecto, tenés " + errores + " Errores");
} else {
  alert("Correcto, tenés " + errores + " Errores");
}

pregunta2();
  
alert("Total de errores: " + errores);

function pregunta2() {
    let preg2 = prompt("¿De qué color es el caballo blanco de San Martin? ").toUpperCase();
  
    while (preg2 !== "BLANCO") {
      alert("Incorrecto");
      errores++;
      preg2 = prompt("¿De qué color es el caballo blanco de San Martin? ").toUpperCase();
    }
  
    alert("Correcto");
}
