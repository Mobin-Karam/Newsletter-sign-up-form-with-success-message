'use strict'

const loginForm = document.getElementById("newsletterForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email");
    const alert = document.getElementById("al");
    const center = document.getElementById("center");
    const centerv2 = document.getElementById("centerv2");


    if (email.value == "") {
        alert.style.display = "inline-block";
        window.onload = setInterval(() => alert.style.display = "none", 3000)

    } else {
        center.style.display = "none";
        centerv2.style.display = "flex";
        const email = document.getElementById("email");
        const markemail = document.getElementById("markemail")
        markemail.innerHTML = `${email.value}`

        console.log(
            `This form has a email of ${email.value}`
        );

    }

    const btn = document.getElementById("dissmiss");
    btn.addEventListener("click", () => {
        const center = document.getElementById("center");
        const centerv2 = document.getElementById("centerv2");
        centerv2.style.display = "none";
        center.style.display = "flex";
    })
});