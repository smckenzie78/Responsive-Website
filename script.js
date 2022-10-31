var navLinks = document.getElementById("navLinks");

function hideMenu(){
    navLinks.style.marginLeft = "100%";
    navLinks.style.transition = "0.4s";
}
function showMenu(){
    navLinks.style.marginLeft = "58%";
    navLinks.style.transition = "0.4s";
}