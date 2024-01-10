

function createCard() {
    console.log("Hello World");

    document.getElementById("newCard").style.display = "block";
    document.getElementById("createbox").style.display = "none";
    document.getElementById("buttoncontainer").style.display = "block";

    var cardtitle = document.getElementById('cardTitle1').value;
    var cardText = document.getElementById('cardText').value;
    var cardFrom = document.getElementById('cardFrom').value;
    var textcolor = document.getElementById("textcolor").value;
    var image = document.getElementById("bilde").value;

    if(image == "1") {
        document.getElementById("newimage").src = "images/Christmass-tree.png";
    }
    if(image == "2") {
        document.getElementById("newimage").src = "images/Nisse-god-jul.png";
    }
    

    document.getElementById("newcardtitle").innerText = cardtitle;
    document.getElementById("newcardtext").innerText = cardText;
    document.getElementById("newcardfrom").innerText = cardFrom;

    document.getElementById("newcardtitle").style.color = textcolor;
    document.getElementById("newcardtext").style.color = textcolor;
    document.getElementById("newcardfrom").style.color = textcolor;
} 

function printPage() {
    window.print();
}

function newPage() {
    document.getElementById("newCard").style.display = "none";
    document.getElementById("createbox").style.display = "block";
    document.getElementById("buttoncontainer").style.display = "none";
}