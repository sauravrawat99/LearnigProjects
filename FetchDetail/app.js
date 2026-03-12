const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = document.querySelector("#name").value;
  const ageValue = document.querySelector("#age").value;
  const emailValue = document.querySelector("#email").value;
  const phoneValue = document.querySelector("#mobile").value;

  let card_box = document.querySelector("#card_box");

  if (!card_box) {
    card_box = document.createElement("div");
    card_box.id = "card_box";
    document.body.appendChild(card_box);
  }

  let card = document.createElement("div");
  card.id = "card";

  let name = document.createElement("h2");
  let age = document.createElement("p");
  let email = document.createElement("p");
  let phone = document.createElement("p");

  name.innerText = "Name: " + nameValue;
  age.innerText = "Age: " + ageValue;
  email.innerText = "Email: " + emailValue;
  phone.innerText = "Mobile: " + phoneValue;

  card.appendChild(name);
  card.appendChild(age);
  card.appendChild(email);
  card.appendChild(phone);

  card_box.appendChild(card);
});
