const container = document.querySelector("#container");
const button = document.querySelector("#resize");

function randomColor() {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   return `rgb(${r}, ${g}, ${b})`;
}

function buildGrid (size) {
   
   if (size <= 100) {

      for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.classList.add("row")
      row.style.width = "100%";
   
         for (let j = 0; j < size; j++) {
            const boxes = document.createElement("div");
            boxes.classList.add("boxes");
            boxes.textContent = "";
            boxes.style.width = `${100 / size}%`;
            row.appendChild(boxes);
            boxes.addEventListener("mouseenter", () => {
               boxes.style.backgroundColor = randomColor();
               let currentOpacity = parseFloat(boxes.style.opacity) || 0;
               boxes.style.opacity = currentOpacity + 0.1;
            })
         }

      container.appendChild(row);
      }

   } else {alert("Stick with numbers smaller than 100. Lets not crash anything :)")}
}

buildGrid(16)

button.addEventListener("click", () => {
   let axisLength = prompt("How Many boxes do you want?")
   console.log(axisLength);
   container.replaceChildren();
   buildGrid(axisLength);
});