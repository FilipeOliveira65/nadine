var menu = document.getElementById("menu");
var menuContents = document.getElementById("navbar");

menu.addEventListener("click", function() {
    if (menuContents.style.display === "none") {
        menuContents.style.display = "flex";
    } else {
        menuContents.style.display = "none";
    }   
})

let popup = document.getElementById("schedule-area");

let openPopup = document.getElementById("schedule");
let closePopup = document.getElementById("cancel");

let confirmSchedule = document.getElementById("send");

openPopup.addEventListener("click", function() {
    popup.style.display = "flex";
})

confirmSchedule.addEventListener("click", function() {
    sendEmail();
})

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
})

async function sendEmail() {
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;

    const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            to: userEmail,
            subject: "Confirmação de agendamento",
            text: `Olá, ${userName}! Que alegria poder te atender! Este e-mail é para confirmar o agendamento da sua consulta! Logo você receberá mais informações. Até breve.`
        })
    });

    const result = await response.text();
    console.log(result);
}






// async function sendEmail () {
//     var userName = document.getElementById("name").value;
//     var userEmail = document.getElementById("email").value;
    
//     console.log("enviando solicitação");
    
//     sendEmail();
    
// }