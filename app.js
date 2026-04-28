function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function sumar() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  if (n1 === "" || n2 === "") {
    alert("complete los campos");
   
  }

  let resultado = suma(parseFloat(n1), parseFloat(n2));
  document.getElementById("resultado").textContent = "Resultado: " + resultado;
  document.getElementById("error").textContent = "";
}

function restar() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  if (n1 === "" || n2 === "") {
     alert("complete los campos");
    
  }

  let resultado = resta(parseFloat(n1), parseFloat(n2));
  document.getElementById("resultado").textContent = "Resultado: " + resultado;
  document.getElementById("error").textContent = "";
}

function limpiar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").textContent = "Resultado: -";
  document.getElementById("error").textContent = "";
}