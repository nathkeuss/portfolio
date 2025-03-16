function copyEmail() {
    let emailElement = document.getElementById("email");
    let emailText = emailElement.innerText;

    navigator.clipboard.writeText(emailText).then(() => {
        emailElement.innerText = "Copié !";
        setTimeout(() => emailElement.innerText = emailText, 1500);
    });
}

function copyDiscord(event, notificationId) {
    event.preventDefault();

    const notification = document.getElementById(notificationId);
    const discordUsername = notification.querySelector("strong").textContent;

    navigator.clipboard.writeText(discordUsername);

    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}

