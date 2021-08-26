// Draw concentric squares and alert no on click just as
// the image https://th.bing.com/th/id/OIP.TpdyuEDbIqyuxG51C47EewHaHa?pid=Api&rs=1

const app = document.getElementById("app");

function createReact(parent, width, height, id) {
  const div = document.createElement("div");
  div.style.width = width;
  div.style.height = height;
  div.style.border = "1px solid";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.dataset.id = id;
  parent.appendChild(div);
  return div;
}

const ele1 = createReact(app, "300px", "300px", 1);
const ele2 = createReact(ele1, "250px", "250px", 2);
const ele3 = createReact(ele2, "200px", "200px", 3);
const ele4 = createReact(ele3, "150px", "150px", 4);
createReact(ele4, "100px", "100px", 5);

function handleClick(event) {
  console.log(event.target.dataset.id);
}
app.addEventListener("click", handleClick);
