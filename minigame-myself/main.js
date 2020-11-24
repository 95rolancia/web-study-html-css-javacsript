window.addEventListener("load", () => {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then((result) => loadItem(result.items));
});

const loadItem = (items) => {
  const itemList = document.querySelector(".items");
  items.map((item) => {
    const newItem = document.createElement("li");
    newItem.className = "item visible";

    const newItemImg = document.createElement("img");
    newItemImg.src = item.url;
    newItem.appendChild(newItemImg);

    const newItemSex = document.createElement("span");
    newItemSex.innerHTML = item.sex;
    newItem.appendChild(newItemSex);

    const newItemSize = document.createElement("span");
    newItemSize.innerHTML = item.size;
    newItem.appendChild(newItemSize);

    newItem.dataset.color = item.color;
    newItem.dataset.type = item.type;

    itemList.appendChild(newItem);
  });
};

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
  if (event.target.tagName != "BUTTON" && event.target.tagName != "IMG") return;
  let filter = event.target.className;
  if (filter === "") {
    filter = event.target.parentNode.className;
  }

  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    console.log(filter);
    if (item.dataset.color === filter || item.dataset.type === filter) {
      item.classList.add("visible");
    } else {
      item.classList.remove("visible");
    }
  });
});

const logoBtn = document.querySelector(".shopping .logo");
logoBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    if (!item.classList.contains("visible")) {
      item.classList.add("visible");
    }
  });
});
