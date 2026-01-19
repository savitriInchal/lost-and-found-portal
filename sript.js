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
// SAVE REPORT
document.addEventListener("DOMContentLoaded", function () {

  let form = document.getElementById("itemForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let reports = JSON.parse(localStorage.getItem("reports")) || [];

    let report = {
      itemName: document.getElementById("itemName").value,
      category: document.getElementById("category").value,
      type: document.getElementById("type").value,
      description: document.getElementById("description").value,
      contact: document.getElementById("contact").value,
      user: localStorage.getItem("loggedInUser"),
      date: new Date().toLocaleString()
    };

    reports.push(report);
    localStorage.setItem("reports", JSON.stringify(reports));

    alert("Report saved successfully");
    form.reset();
  });

});


// DISPLAY MY REPORTS
document.addEventListener("DOMContentLoaded", function () {

  let myReportsDiv = document.getElementById("myReports");
  if (!myReportsDiv) return;

  let reports = JSON.parse(localStorage.getItem("reports")) || [];
  let currentUser = localStorage.getItem("loggedInUser");

  let myReports = reports.filter(r => r.user === currentUser);

  if (myReports.length === 0) {
    myReportsDiv.innerHTML = "<p>No reports found</p>";
    return;
  }

  myReports.forEach(r => {
    myReportsDiv.innerHTML += `
      <div style="border:1px solid #000; padding:10px; margin:10px;">
        <p><b>Item:</b> ${r.itemName}</p>
        <p><b>Category:</b> ${r.category}</p>
        <p><b>Status:</b> ${r.type}</p>
        <p>${r.description}</p>
        <p><b>Contact:</b> ${r.contact}</p>
        <small>${r.date}</small>
      </div>
    `;
  });

});

