var textvolant  = document.getElementById("textvolant");
var ip  = document.getElementById("ip");

function addAllThings(e) {
    e.style.display = "block";
    setTimeout(function() {
        e.classList.add("textvolanthover");
    }, 5);
}

function supAllThings(e) {
    e.classList.remove("textvolanthover");
    setTimeout(function() {
        e.innerHTML = "";
        e.style.display = "none";
    }, 200);
}

function copyToClickBoard(){
    var content = ip.innerHTML;
    navigator.clipboard.writeText(content).then(() => {
        textvolant.innerHTML = "IP copiée";
        addAllThings(textvolant);
        setTimeout(function() {
            supAllThings(textvolant);
        }, 1000);
    }).catch(err => {
        textvolant.innerHTML = "CTRL + C";
        addAllThings(textvolant);
        setTimeout(function() {
            supAllThings(textvolant);
        }, 1000);
    })
}

ip.onmouseover = function(){
    textvolant.innerHTML = "Copier l'IP";
    addAllThings(textvolant);
}

ip.onmouseout = function(){
    supAllThings(textvolant);
}

var WidthDivFloat = document.getElementById("container-copy").offsetWidth;
textvolant.style.width = WidthDivFloat + "px";
window.onresize = function(){
    var WidthDivFloat = document.getElementById("container-copy").offsetWidth;
    textvolant.style.width = WidthDivFloat + "px";
}