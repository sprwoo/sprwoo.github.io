for (let i = 1; i < 25; i++) {
    console.log("<span id=\"" + i + "\">");
}

for (let i = 0; i < 25; i++) {
    console.log("document.getElementById(\""+i+"\").onclick = function () { appearText(\""+i+"\", \""+ (i+1) + "\"); }")
}