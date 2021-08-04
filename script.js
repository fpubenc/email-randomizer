let input = document.getElementById("emails").value;
let btn = document.getElementById("emailsBtn");
let finalEmails = document.getElementById("finalEmails");
let emailStrings = [];

function clickSubmit(){
    let splitEmails = input.split(" ");
    for (let i=0; i<splitEmails.length; i++){
        emailStrings.push(splitEmails[Math.floor(Math.random() * splitEmails.length)]);
    }

    document.getElementById("finalEmails").innerHTML = emailStrings;
}

btn.addEventListener(onclick, clickSubmit());