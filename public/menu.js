const menu = document.getElementById("menu");
const menuContents = document.getElementById("navbar");

if (menu && menuContents) {
    // Define o valor inicial (opcional, se não estiver definido no CSS)
    menuContents.style.display = "none";

    menu.addEventListener("click", function() {
        if (menuContents.style.display === "none") {
            menuContents.style.display = "flex";
        } else {
            menuContents.style.display = "none";
        }
    });
} else {
    console.error("Elementos 'menu' ou 'navbar' não encontrados no DOM.");
}