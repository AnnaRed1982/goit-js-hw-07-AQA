function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
};

function createBoxes(amount) {
  const newDivArray = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = size + "px";
    newDiv.style.height = size + "px";
    newDivArray.push(newDiv);
    size += 10;
  }
  ref.boxes.append(...newDivArray);
}

function destroyBoxes() {
  ref.boxes.innerHTML = "";
}

ref.input.addEventListener("blur", (event) => {
  let amount = Number(event.currentTarget.value);

  ref.buttonCreate.addEventListener("click", () => {
    createBoxes(amount);
    amount = 0;
  });
  ref.input.value = "";
});

ref.buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});
