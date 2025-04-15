(function(){
    document.addEventListener('DOMContentLoaded', () => {
        const voteButtons = document.querySelectorAll('.price__cta:not(.price__cta--submit):not(.price__cta--close)');
        const closeButtons = document.querySelectorAll('.price__cta--close');

        console.log('Botones "Vota ahora" encontrados:', voteButtons);
        console.log('Botones "Cerrar" encontrados:', closeButtons);

        voteButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('Clic en "Vota ahora"');
                const element = button.closest('.price__element');
                const form = element.querySelector('.price__form');
                console.log('Formulario seleccionado:', form);
                console.log('Contenido del formulario:', form.innerHTML);

                document.querySelectorAll('.price__element').forEach(el => {
                    el.classList.remove('active');
                    el.querySelector('.price__form').classList.remove('active');
                    el.querySelector('.price__items').style.display = 'grid';
                    el.querySelector('.price__cta:not(.price__cta--submit):not(.price__cta--close)').style.display = 'block';
                });

                element.classList.add('active');
                form.classList.add('active');
                element.querySelector('.price__items').style.display = 'none';
                button.style.display = 'none';
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('Clic en "Cerrar"');
                const element = button.closest('.price__element');
                const form = element.querySelector('.price__form');

                element.classList.remove('active');
                form.classList.remove('active');
                element.querySelector('.price__items').style.display = 'grid';
                element.querySelector('.price__cta:not(.price__cta--submit):not(.price__cta--close)').style.display = 'block';
            });
        });

        document.querySelectorAll('.price__form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Formulario enviado');
                alert('¡Gracias por tu voto!');
                const element = form.closest('.price__element');
                element.classList.remove('active');
                form.classList.remove('active');
                element.querySelector('.price__items').style.display = 'grid';
                element.querySelector('.price__cta:not(.price__cta--submit):not(.price__cta--close)').style.display = 'block';
            });
        });
    });
})();