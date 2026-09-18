function goNext() {

    const button = document.querySelector(".next-button");

    button.innerHTML = "wag net... 🤎";

    button.style.transform = "scale(0.95)";

    setTimeout(() => {

        window.location.href = "message.html";

    }, 450);
}