const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senhaMinimo = 8;

    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    if (senha.length < senhaMinimo) {
        alert("A senha precisa ter no mínimo 8 caracteres!");
        return;
    }

    alert("Login realizado com sucesso!");

    form.reset();
});

const elementos = document.querySelectorAll(".scroll-animation");

window.addEventListener("scroll", () => {
    const alturaJanela = window.innerHeight;

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < alturaJanela - 100) {
            el.classList.add("show");
        }
    });
});


