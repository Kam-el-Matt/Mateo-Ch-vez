function cambiarTrabajo(idBoton, rutaImagen, texto) {
    // 1. Buscamos todos los botones y les quitamos la clase 'activo'
    const botones = document.querySelectorAll('.habilidad-item');
    botones.forEach(boton => {
        boton.classList.remove('activo');
    });

    // 2. Le agregamos la clase 'activo' solo al botón que recibió el clic
    const botonClickeado = document.getElementById(idBoton);
    botonClickeado.classList.add('activo');

    // 3. Capturamos los elementos del visualizador de la derecha
    const visorImagen = document.getElementById('visor-imagen');
    const visorTexto = document.getElementById('visor-texto');

    // 4. Hacemos un pequeño efecto de parpadeo (fade) y cambiamos la imagen
    visorImagen.style.opacity = 0;
    
    setTimeout(() => {
        visorImagen.src = rutaImagen;
        visorTexto.innerText = texto;
        visorImagen.style.opacity = 1;
    }, 200); // Tarda 0.2 segundos en cambiar para que se vea fluido
}
/* ==========================================================================
   SLIDER AUTOMÁTICO DEL HERO
   ========================================================================== */
// 1. Definimos las imágenes que se van a rotar
const imagenesHero = [
    'img/Logo.jpg',        // Tu logo
    'img/mifoto.webp'      // Reemplaza esto con el nombre exacto de tu foto
];

let indiceActual = 0;

function rotarImagenHero() {
    const imagenHero = document.getElementById('hero-slider');
    
    // Si la imagen no existe en la página, detenemos la función
    if (!imagenHero) return;

    // Efecto de desvanecimiento (hace la imagen invisible)
    imagenHero.style.opacity = 0;

    // Esperamos 0.5 segundos a que desaparezca para cambiar la ruta de la foto
    setTimeout(() => {
        // Calculamos cuál es la siguiente imagen (si llega al final, vuelve a 0)
        indiceActual = (indiceActual + 1) % imagenesHero.length;
        
        // Cambiamos la ruta de la imagen
        imagenHero.src = imagenesHero[indiceActual];
        
        // Volvemos a hacer visible la imagen
        imagenHero.style.opacity = 1;
    }, 500); 
}

// 2. Iniciamos el temporizador una vez que la página cargue por completo
window.addEventListener('load', () => {
    // 4000 milisegundos = 4 segundos. Puedes cambiar este número si quieres que dure más o menos.
    setInterval(rotarImagenHero, 4000); 
});