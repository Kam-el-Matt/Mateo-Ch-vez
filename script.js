
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