const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let liArray = [];
const ingredientsSelector = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  let elem = document.createElement("li");

  elem.textContent = ingredient;
  elem.classList.add("item");

  liArray.push(elem);
}

for (let el of liArray) {
  ingredientsSelector.append(el);
}
