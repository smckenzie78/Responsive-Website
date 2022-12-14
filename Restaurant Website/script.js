function notImplemented(){
    alert("Sorry, this feature has not been implemented :(\nThis website exists mainly to show off the UI");
}

function togglemenu(){
    let links = document.getElementById("links");
    links.style.marginLeft = "20%";
    links.style.transition = "0.4s";
}

function closemenu(){
    let links = document.getElementById("links");
    links.style.marginLeft = "100%";
    links.style.transition = "0.6s";
}
