// Seleciona todos os links do menu de navegação
const links = document.querySelectorAll('nav a');

// Scroll suave + destaque do menu ativo
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Remove a classe "ativo" de todos os links
        links.forEach(l => l.classList.remove('ativo'));

        // Adiciona a classe "ativo" no link clicado
        this.classList.add('ativo');

        // Seleciona a seção correspondente ao link clicado
        const destino = document.querySelector(this.getAttribute('href'));

        // Faz a rolagem suave até a seção
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validação do formulário

// Seleciona o formulário e a área de mensagem
const form = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem-sucesso');

// Evento de envio do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio real do formulário

    // Captura os valores digitados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const texto = document.getElementById('mensagem').value;

    // Verifica se algum campo está vazio
    if (nome === '' || email === '' || texto === '') {
        mensagem.style.color = 'red';
        mensagem.textContent = 'Preencha todos os campos!';
        return;
    }

    // Se estiver tudo preenchido, mostra mensagem de sucesso
    mensagem.style.color = 'green';
    mensagem.textContent = 'Mensagem enviada com sucesso!';

    // Limpa os campos do formulário
    form.reset();
});

// Evento executado quando a página carrega completamente
window.addEventListener('load', () => {
    console.log("Site carregado com sucesso!");
});