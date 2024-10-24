const table = document.querySelector(".table");

const createRow = (userData) => {
  const tr = document.createElement("tr");
  const [, name, age, phone, email] = userData;
  [name, email, age, phone].forEach((data) => {
    const td = document.createElement("td");
    td.textContent = data;
    tr.appendChild(td);
  });
  table.appendChild(tr);
  return tr;
};

const renderTable = async () => {
  const fragment = document.createDocumentFragment();
  const users = await window.myAPI.parseCSV();
  users.forEach((user) => {
    fragment.appendChild(createRow(user));
  });
  table.appendChild(fragment);
};

renderTable(table);

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()})`;

const SetButton = document.getElementById("btn");
SetButton.addEventListener("click", () => {
  window.myAPI.openNewTable();
});
