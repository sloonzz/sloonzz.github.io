import data from "./data.js";

const rowItemLimit = 3;

let displayList = () => {
  let sectionContent = document.getElementById("section-content");
  let list = document.createElement("ul");
  list.id = "section-content-list";
  sectionContent.appendChild(list);

  data.forEach(element => {
    let listItem = document.createElement("li");
    listItem.classList.add("section-content-item");
    listItem.innerHTML += addHtml("h1", element.title);
    listItem.innerHTML += addHtml("p", element.description);
    list.appendChild(listItem);
  });
};

let addHtml = (tag, title, classNames = "") => {
  return `<${tag} class='${classNames}'>${title}</${tag}>`;
};

displayList();
