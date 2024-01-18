'Use strict'
let phrase = 'La programación web es fundamental para el progreso';

let palabras = phrase.split(' ');

let palabrasMasDe3Letras = palabras.filter(function(palabra) {
    return palabra.length > 3;
});
alert('Palabras con más de 3 letras:\n' + palabrasMasDe3Letras.join(', '));
