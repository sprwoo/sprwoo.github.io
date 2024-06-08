document.getElementById("0").onclick = function () { appearText("0", "1"); }
document.getElementById("1").onclick = function () { appearText("1", "2"); }
document.getElementById("2").onclick = function () { appearText("2", "3"); }
document.getElementById("3").onclick = function () { appearText("3", "4"); }
document.getElementById("4").onclick = function () { appearText("4", "5"); }
document.getElementById("5").onclick = function () { appearText("5", "6"); }
document.getElementById("6").onclick = function () { appearText("6", "7"); }
document.getElementById("7").onclick = function () { appearText("7", "8"); }
document.getElementById("8").onclick = function () { appearText("8", "8.1"); }
document.getElementById("8.1").onclick = function () { appearText("8.1", "8.2"); }
document.getElementById("8.2").onclick = function () { appearText("8.2", "9"); }
document.getElementById("9").onclick = function () { appearText("9", "10"); }
document.getElementById("10").onclick = function () { appearText("10", "11"); }
document.getElementById("11").onclick = function () { appearText("11", "11.1"); }
document.getElementById("11.1").onclick = function () { appearText("11.1", "12"); }
document.getElementById("12").onclick = function () { appearText("12", "13"); }
document.getElementById("13").onclick = function () { appearText("13", "14"); }
document.getElementById("14").onclick = function () { appearText("14", "15"); }
document.getElementById("15").onclick = function () { appearText("15", "16"); }
document.getElementById("16").onclick = function () { appearText("16", "17"); }
document.getElementById("17").onclick = function () { appearText("17", "18"); }
document.getElementById("18").onclick = function () { appearText("18", "19"); }
document.getElementById("19").onclick = function () { appearText("19", "20"); }
document.getElementById("20").onclick = function () { appearText("20", "21"); }
document.getElementById("21").onclick = function () { appearText("21", "22"); }
document.getElementById("22").onclick = function () { appearText("22", "23"); }
document.getElementById("23").onclick = function () { appearText("23", "24"); }
document.getElementById("24").onclick = function () { appearText("24", "25"); }

function appearText(clicked, reveal) {
    if (document.getElementById(clicked).classList.contains("show")) return;
    document.getElementById(reveal).classList.remove("hidden");
    document.getElementById(reveal).classList.add("click");
    document.getElementById(clicked).classList.remove("click");
    document.getElementById(clicked).classList.add("show");
}