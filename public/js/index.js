import data from "/public/js/data.js";

const rowItemLimit = 3;

function displayList() {
  let sectionContent = document.getElementById("section-content");
  let list = document.createElement("ul");
  list.id = "section-content-list";
  sectionContent.appendChild(list);

  data.forEach(element => {
    let listItem = document.createElement("li");
    listItem.classList.add("section-content-item");
    listItem.innerHTML = `<h1> ${element.title} </h1>`;
    listItem.innerHTML += `<p> ${element.description} </p>`;
    list.appendChild(listItem);
  });
}

displayList();
