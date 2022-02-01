let submit = document.getElementById("submit");

tiA.style.display = "none";
toA.style.display = "none";
pP.style.display = "none";

submit.addEventListener("click", function () {
    let billAmount = document.getElementById("amount").value;
    let tipPercent = document.getElementById("tipPercent").value;
    let people = document.getElementById("people").value;
    let tipAmount = document.getElementById("tipAmount").value = (parseFloat(billAmount) * parseFloat(tipPercent)) / 100;
    let totalAmount = document.getElementById("totalAmount").value = parseFloat(billAmount) + parseFloat(tipAmount);
    let perPerson = document.getElementById("perPerson").value = parseFloat(totalAmount) / parseFloat(people);

    tiA.style.display = "block";
    toA.style.display = "block";
    pP.style.display = "block";


})

