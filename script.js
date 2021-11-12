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
    if (mailValidate != 0 && passwordValidate != 0) {
        connection.style.display = "none";
        welcome.style.display = "flex";

    } else {
        connection.style.display = "flex";
    }
    console.log(mailValidate)
}
document.getElementById("validateConnection").addEventListener("click", conditionConnection);

