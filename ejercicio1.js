'Use strict '
let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let nombreIngresado = prompt("Ingrese un nombre:");
if (students.includes(nombreIngresado)) {
    alert("El nombre se encuentra en el vector.");
} else {
    alert("El nombre no se encuentra en el vector.");
}
