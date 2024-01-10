document.getElementById("intro1").onclick = function () {
    appeartext("intro1", "intro2", "intro3");
    document.getElementById("intro4").classList.add("show");
    document.getElementById("advent").classList.add("clickable");
}

document.getElementById("advent").onclick = function() {
    appeartext("advent", "sword", "swordthing");
}

document.getElementById("intro3").onclick = function () {
    appeartext("intro3", "name1", "name2")
}

document.getElementById("name2").onclick = function () {
    appeartext("name2", "name3", "further1");
}

document.getElementById("further1").onclick = function () {
    appeartext("further1", "about1", "about1");
    document.getElementById("about1").classList.remove("show");
}

document.getElementById("about1").onclick = function () {
    appeartext("about1", "about2", "nothing");
}

function appeartext(clicked, reveal, activate) {
    document.getElementById(reveal).classList.add("show");
    document.getElementById(clicked).classList.remove("clickable");
    document.getElementById(clicked).classList.add("show");
    document.getElementById(activate).classList.add("clickable");
}