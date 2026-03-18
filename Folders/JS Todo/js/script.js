const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const container = document.getElementById("todosContainer");

const todos = ["Buy Apples", "Buy Bananas"];

function displayTodos() {
    // 1) uzeti todos
    // 2) za svaki todo kreirati HTML element
    // 3) svaki taj HTML element dodati originalnon HTML-u
    container.innerHTML = "";
    todos.forEach((todo, index) => {
        const todoElementHTML = document.createElement("div");
        todoElementHTML.className = "todo-item";

        const todoContent = document.createElement("span");
        todoContent.textContent = todo;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", () => deleteTodo(index));

        todoElementHTML.appendChild(todoContent);
        todoElementHTML.appendChild(deleteButton);

        container.appendChild(todoElementHTML);
    });
}

function addTodo(e) {
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    if (!newTodo) return;

    todoInput.value = "";
    todos.push(newTodo);
    displayTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

document.addEventListener("DOMContentLoaded", displayTodos);
addTodoButton.addEventListener("click", (e) => addTodo(e));
