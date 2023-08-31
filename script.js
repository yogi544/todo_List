const addButton = document.getElementById("addButton");
const newTodoInput = document.getElementById("newTodo");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", () => {
    const task = newTodoInput.value.trim();
    if (task !== "") {
        const li = document.createElement("li");
        li.textContent = task;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("removeButton");
        
        li.appendChild(removeButton);
        todoList.appendChild(li);
        newTodoInput.value = "";

        removeButton.addEventListener("click", () => {
            li.remove();
        });
    }
});
