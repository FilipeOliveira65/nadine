var menu = document.getElementById("menu");
var menuContents = document.getElementById("navbar");

menu.addEventListener("click", function() {
    if (menuContents.style.display == "none") {
        menuContents.style.display = "flex";
    } else {
        menuContents.style.display = "none";
    }   
})
