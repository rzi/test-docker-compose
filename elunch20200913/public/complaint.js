window.onload = function() {

    window.document.getElementById("fname").textContent = getCookie("name")
    var sendTo
    sendTo = "sesa" + getCookie("sesa") + "@se.com"
        // console.log("sendTo: "+ sendTo);
    document.getElementById("emailClient").value = sendTo;

    document.getElementById("complaint").addEventListener("change", function() {

        if (document.getElementById("complaint").options[complaint.selectedIndex].value != "empty") {
            document.getElementById("emailSupplier").value = document.getElementById("complaint").options[complaint.selectedIndex].value

        } else {
            alert("Musisz wybrać dostawcę!")
            document.getElementById("emailSupplier").value = ""
        }
    });

    document.getElementById("complaint").addEventListener("change", function() {
        var inputMessage = document.querySelector(".input-message");
        inputMessage.style.display = "none";
    });
    document.getElementById("emailText").addEventListener("click", function() {
        document.getElementById("emailText").value = "";
        document.getElementById("emailText").style.color = "black"
    });
    document.getElementById("btnSend").addEventListener("click", function(e) {

        if (document.getElementById("emailSupplier").value == "") {
            var inputMessage = document.querySelector(".input-message");
            inputMessage.style.display = "inline";
            inputMessage.style.color = "red";
            e.preventDefault();
        } else if (document.getElementById("emailText").value == "") {

            document.getElementById("emailText").value = "Wprowadź tekst wiadomości";
            document.getElementById("emailText").style.color = "red"
            e.preventDefault();

        } else(alert("Dokument został wysłany"));

    });






}; //onload
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}