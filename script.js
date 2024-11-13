const button = document.getElementById('toggle-button');
const body = document.body;

button.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Desativar Modo Escuro';
    } else {
        button.textContent = 'Ativar Modo Escuro';
    }
});
