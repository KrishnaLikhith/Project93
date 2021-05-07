var username = "";

function addUser() {
    username = document.getElementById("Name").value;
    localStorage.setItem("Name", username);
    window.location = "page.html";
}