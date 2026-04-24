function save() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    var resultTable = document.getElementById("resultTable");

    var newrow = document.createElement("tr");

    newrow.innerHTML =
        "<td>" + name + "</td>" +
        "<td>" + age + "</td>" +
        "<td>" + gender.value + "</td>" +
        "<td>" + course + "</td>" +
        "<td>" + email + "</td>" +
        "<td><button class='delete'onclick='deleterow(this)'>Delete</button></td>";

    resultTable.appendChild(newrow);
}

function deleterow(button) {
    button.parentElement.parentElement.remove();
    alert("Are you sure you want to delete this row?");
}