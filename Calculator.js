function addNumbers() {
    document.getElementsByName("answer")[0].value = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
}

function subNumbers() {
    document.getElementsByName("answer")[0].value = Number(document.getElementById("num1").value) - Number(document.getElementById("num2").value);
}

function mulNumbers() {
    document.getElementsByName("answer")[0].value = Number(document.getElementById("num1").value) * Number(document.getElementById("num2").value);
}

function divNumbers() {
    document.getElementsByName("answer")[0].value = Number(document.getElementById("num1").value) / Number(document.getElementById("num2").value);
}

function sqrNumbers() {
    document.getElementsByName("answer")[0].value = Math.pow(Number(document.getElementById("num1").value), Number(document.getElementById("num2").value));
}

function inputPi() {
    document.getElementById("num1").value = Math.PI;
}

function inputResult() {
    document.getElementById("num1").value = document.getElementsByName("answer")[0].value;
}
