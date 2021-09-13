function isNumber(valueToCheck) {
    return !isNaN(valueToCheck);
}

window.onload = function() {
    var poleLiczbowe = document.getElementById("loginform").sesa_no1; //.elements[0]
    var info = document.getElementById("info");
    console.log("poleLiczbowe");
    poleLiczbowe.onkeyup = function(e) {
        var wpisanyZnak = e.which;

        if (isNumber(this.value)) {
            this.style.backgroundColor = "white";
            info.innerHTML = "";
        } else {
            e.preventDefault();
            this.style.backgroundColor = "red";
            info.innerHTML = "Niepoprawny format - pole przyjmuje tylko cyfry z twojego SESA";
        }
    };

};