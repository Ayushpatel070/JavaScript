// First we get the elements.
let todoInput = document.getElementById("todo-input");
let addButton = document.getElementById("add-button");
let dltSButton = document.getElementById("dlt-selected");
let dltallButton = document.getElementById("dlt-all");
let ulTag = document.getElementById("todo-list");

console.log(todoInput, addButton, dltSButton, dltallButton, ulTag);

// Give alert when input is empty. 
function Addtask() {
    if (todoInput.value === "") {
        alert("Oops! You have not written any task.")
        return;
    }

    // Create elements
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = todoInput.value;
    span.style.color = "green";

    // Select button changes color of task
    const selectBtn = document.createElement("button");
    selectBtn.textContent = "Select";

    // Delete button removes only this task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Wrap buttons in a div for vertical layout
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexDirection = "row";
    buttonContainer.style.gap = "8px";
    buttonContainer.style.marginLeft = "15px";

    // Toggle color between red and green.
    selectBtn.onclick = function () {
        if (span.style.color === "red") {
            span.style.color = "green";
        } else {
            span.style.color = "red";
        }
    };

    // Check if span text is red (selected)
    deleteBtn.onclick = function () {
        li.remove();
    };

    // adding class for styling to buttons.
    selectBtn.classList.add("hover-effect");
    deleteBtn.classList.add("hover-effect");

    buttonContainer.append(selectBtn, deleteBtn);

    // Append all elements to li, then li to ul
    li.append(span);
    li.append(buttonContainer);
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.listStyle = "none";
    li.style.fontSize = "21px";
    li.style.marginBottom = "10px";

    ulTag.append(li);

    // Clear input
    todoInput.value = "";

}

// Delete all the lists.
function DeleteAll() {
    ulTag.innerHTML = "";
}

// Delete only selected lists.
function DeleteSelect() {
    const allTasks = ulTag.querySelectorAll("li");

    allTasks.forEach((li) => {
        const span = li.querySelector("span");
        // Check if span text is red (selected)
        if (span.style.color == "red") {
            li.remove();
        }
    });
};