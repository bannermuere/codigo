const botonBlackMode = document .querySelector('#botonBlackMode');

botonBlackMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    botonBlackMode.classList.toggle('activo');
});