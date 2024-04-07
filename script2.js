const overlay = document.getElementById("product-shape");
// Ajout de la fonction changeColor à tous les éléments cliquable
const overlay2 = document.getElementById("product-back-shape");

function changeColor(picker) {
    // Set the fill style
    overlay.style.fill = picker.toHEXString();
    }
    function changeColor2(picker) {
    // Set the fill style
    overlay2.style.fill = picker.toHEXString();
    }