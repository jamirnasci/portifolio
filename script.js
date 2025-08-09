// Simulação de envio do formulário
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const messageElement = document.getElementById("formMessage");
    messageElement.textContent = "Mensagem enviada com sucesso!";
    messageElement.style.color = "green";

    // Limpar campos
    this.reset();

    // Remover mensagem depois de 3s
    setTimeout(() => {
        messageElement.textContent = "";
    }, 3000);
});
