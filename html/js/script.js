// Controle do formulário
const formulario = document.querySelector("form");

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();

        if (nome === "" || email === "") {
            alert("Preencha os campos obrigatórios.");
            return;
        }

        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);

        alert("Cadastro realizado com sucesso!");
        formulario.reset();
    });
}

// Controle do modal
const botaoModal = document.querySelector(".btn-modal");
const modal = document.querySelector(".modal");

if (botaoModal && modal) {
    botaoModal.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    const botaoFechar = modal.querySelector("button");

    botaoFechar.addEventListener("click", function () {
        modal.style.display = "none";
    });
}