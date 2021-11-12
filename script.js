let stopPropagationForm = document.getElementsByTagName("form");
for (let i = 0; i < stopPropagationForm.length; i++) {
    let form = stopPropagationForm[i];
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    })
}

function conditionConnection() {
    let mailValidate = document.getElementById("mailConnection").value;
    let passwordValidate = document.getElementById("passwordConnection").value;
    console.log(mailValidate)
    if (mailValidate && passwordValidate !== "") {
        connection.style.display = "none";
        welcome.style.display = "block";

    } else {
        connection.style.display = "flex";
        document.getElementById("mailConnection").style.borderColor = "red";
        document.getElementById("passwordConnection").style.borderColor = "red";
    }
}
//coche la checkbox, enregistrement et lorqu'on actualise, on reste sur la page après le formulaire
function recording(key, value) {
    localStorage.setItem(key, value);
}
function save() {
    recording(stayConnected.id, stayConnected.checked);
}
function resultSave() {
    let saveInformations = localStorage.getItem("stayConnected")
    // rappeler que la variable existe et qu'il est vrai
    if (saveInformations && saveInformations === "true") {
        connection.style.display = "none";
        welcome.style.display = "block";

    } else {
        connection.style.display = "flex";
        welcome.style.display = "none";
    }
}
document.getElementById("validateConnection").addEventListener("click", function () {
    save();
    resultSave();
    conditionConnection();
})
resultSave();

function stopRecording(key, value) {
    // supprime tous les localStorage
    localStorage.clear;
}
function stopSave() {
    stopRecording(stayConnected.id, stayConnected.checked);
}
document.getElementById("disconnection").addEventListener("click", stopSave);

function returnForm() {
    connection.style.display = "flex";
    welcome.style.display = "none";
}
document.getElementById("disconnection").addEventListener("click", returnForm);

