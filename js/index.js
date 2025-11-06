
document.getElementById("formOrcamento").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !email) {
        alert("Por favor, preencha todos os campos obrigatórios!");
    } else {
        alert("Orçamento enviado com sucesso!");
        this.reset(); // limpa o formulário
    }
});
