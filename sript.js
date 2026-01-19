const form = document.getElementById("itemForm");
const itemsList = document.getElementById("itemsList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("itemName").value;
    const category = document.getElementById("category").value;
    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;
    const contact = document.getElementById("contact").value;

    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
        <p><span>Item:</span> ${name}</p>
        <p><span>Category:</span> ${category}</p>
        <p><span>Status:</span> ${type}</p>
        <p><span>Description:</span> ${description}</p>
        <p><span>Contact:</span> ${contact}</p>
    `;

    itemsList.appendChild(div);
    form.reset();
});

