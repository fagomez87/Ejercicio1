var button = document.getElementById("clickable");

function goToMenu() {
    window.location.replace("menu.html")
}

function goToAbout() {
    window.location.replace("about.html")
}

function goToBeer() {
    window.location.replace("ourBeers.html")
}

function mailTo() {
    mailTo("conlospibes@gmail.com?subject=Reservas")
}

function editStyle() {
   var menu = document.getElementById("fullMenu");

   menu.setAttribute("style", "visibility:visible");
}
