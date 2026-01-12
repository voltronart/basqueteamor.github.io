const ball = document.getElementById('ball');
const messageCard = document.getElementById('messageCard');
const court = document.getElementById('court');

// Inicia a animação ao clicar na bola ou após 1 segundo
setTimeout(lancarBola, 1000);

function lancarBola() {
    ball.classList.add('shot');

    // Espera a animação da bola terminar (1.2s) para mostrar a mensagem
    setTimeout(() => {
        court.style.display = 'none'; // Esconde a quadra
        messageCard.style.display = 'block'; // Mostra a mensagem
    }, 1200);
}