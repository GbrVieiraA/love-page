document.addEventListener("DOMContentLoaded", function () {
    const fotos = document.querySelectorAll('.foto');
    const mensagemFoto = document.getElementById('mensagem-foto');
    const mensagemTexto = document.getElementById('mensagem-texto');

    fotos.forEach(foto => {
        foto.addEventListener('click', function () {
            const mensagem = foto.getAttribute('data-msg');

            mensagemTexto.innerHTML = mensagem;
            mensagemFoto.style.display = 'block';
        });
    });
});

function fecharMensagem() {
    const mensagemFoto = document.getElementById('mensagem-foto');
    mensagemFoto.style.display = 'none';
}
