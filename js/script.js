function copyEmail() {
    let emailElement = document.getElementById("email");
    let emailText = emailElement.innerText;

    navigator.clipboard.writeText(emailText).then(() => {
        emailElement.innerText = "✅ Copié !";
        setTimeout(() => emailElement.innerText = emailText, 1500);
    });
}
