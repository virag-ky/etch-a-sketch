const container = document.querySelector(".container");
const colorContainer = document.querySelector(".colors");

const clearButton = document.getElementById("clear");
clearButton.textContent = "Clear";
clearButton.classList.add("btn");

const newGridButton = document.getElementById("new");
newGridButton.textContent = "New Grid";
newGridButton.classList.add("btn");

const rgbButton = document.createElement("button");
rgbButton.textContent = "Color RGB";
rgbButton.classList.add("color-btn", "rgb");

const violetButton = document.createElement("button");
violetButton.textContent = "DarkViolet";
violetButton.classList.add("color-btn", "violet");

const limeButton = document.createElement("button");
limeButton.textContent = "Lime";
limeButton.classList.add("color-btn", "lime");

const pinkButton = document.createElement("button");
pinkButton.textContent = "DeepPink";
pinkButton.classList.add("color-btn", "pink");

const aquaButton = document.createElement("button");
aquaButton.textContent = "Aquamarine";
aquaButton.classList.add("color-btn", "aqua");

const grayButton = document.createElement("button");
grayButton.textContent = "50 shades of Gray";
grayButton.classList.add("color-btn", "gray");

//Create grid
function createGrid(number) {
  for (let i = 0; i < number * number; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
  }
  container.style.gridTemplateColumns = `repeat(${number}, auto)`;
  container.style.gridTemplateRows = `repeat(${number}, auto)`;
}

createGrid(16);

//Gray color
function getGray() {
  const boxes = container.querySelectorAll(".grid");
  grayButton.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        let grayColor = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${grayColor},${grayColor},${grayColor})`;
      })
    );
  });
  colorContainer.appendChild(grayButton);
}
getGray();

//Aquamarine color
function getAquamarine() {
  const boxes = container.querySelectorAll(".grid");
  aquaButton.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.style.background = "aquamarine";
      })
    );
  });
  colorContainer.appendChild(aquaButton);
}
getAquamarine();

//DeepPink color
function getDeepPink() {
  const boxes = container.querySelectorAll(".grid");
  pinkButton.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.style.background = "DeepPink";
      })
    );
  });
  colorContainer.appendChild(pinkButton);
}
getDeepPink();

//Lime color
function getLime() {
  const boxes = container.querySelectorAll(".grid");
  limeButton.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.style.background = "Lime";
      })
    );
  });
  colorContainer.appendChild(limeButton);
}
getLime();

//DarkViolet color
function getDarkViolet() {
  const boxes = container.querySelectorAll(".grid");
  violetButton.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.style.background = "DarkViolet";
      })
    );
  });
  colorContainer.appendChild(violetButton);
}
getDarkViolet();

//RGB colors
function getRGB() {
  const boxes = container.querySelectorAll(".grid");
  rgbButton.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${R},${G},${B})`;
      })
    );
  });
  colorContainer.appendChild(rgbButton);
}
getRGB();

//Clear button
function getClear() {
  const boxes = container.querySelectorAll(".grid");
  clearButton.addEventListener("click", () => {
    boxes.forEach((box) => (box.style.background = "white"));
  });
}
getClear();

//New grid
newGridButton.addEventListener("click", () => {
  const boxes = container.querySelectorAll(".grid");
  boxes.forEach((box) => box.remove());
  let input = prompt(
    "Number of squares per side :",
    "Enter a number between 2 and 80"
  );
  if (input === null || input < 2 || input > 80 || isNaN(input)) {
    location.reload();
  } else {
    createGrid(input);
    getGray();
    getLime();
    getRGB();
    getAquamarine();
    getDarkViolet();
    getDeepPink();
    getClear();
  }
});
