const botaoMenu = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("aberto");

        if (menu.classList.contains("aberto")) {
            botaoMenu.textContent = "✕";
        } else {
            botaoMenu.textContent = "☰";
        }
    });
}
