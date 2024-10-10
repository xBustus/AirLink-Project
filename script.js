const linkedin = document.getElementById("botao1");
const whatsapp = document.getElementById("botao2");
const instagram = document.getElementById("botao3");
const email = document.getElementById("botao4");

linkedin.addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/";
});
instagram.addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/";
});
whatsapp.addEventListener("click", () => {
  window.location.href = "https://api.whatsapp.com/send?phone=5511940485059";
});
email.addEventListener("click", () => {
  window.location.href = "mailto:id586173@live.com";
});

let companies = `[
    {
        "name": "Big Company",
        "numberOfEmployees": 10000,
        "ceo": "mary",
        "rating": 3.6
    },
    {
        "name": "Small Startup",
        "numberOfEmployees": 3,
        "ceo": null,
        "rating": 4.3
    }
]`;

console.log(JSON.parse(companies)[0].name);
console.log(JSON.parse(companies)[0].ceo);
console.log(JSON.parse(companies)[1].name);
console.log(JSON.parse(companies)[1].ceo);
// console.log(companies)
