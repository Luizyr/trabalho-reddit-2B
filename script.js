// Obter os elementos do formulário
const emailInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.querySelector('.login-btn');

// Função para verificar se ambos os campos estão preenchidos
function checkForm() {
    if (emailInput.value !== '' && passwordInput.value !== '') {
        loginBtn.classList.add('active');  // Ativa o botão e torna ele laranja
    } else {
        loginBtn.classList.remove('active');  // Deixa o botão cinza
    }
}

// Adicionar ouvintes de evento para os campos de input
emailInput.addEventListener('input', checkForm);
passwordInput.addEventListener('input', checkForm);