const form = document.getElementById("form");
const input = document.getElementById("input");
const todo = document.getElementById("todos");

function addTodo(){
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = input.value;
    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;


        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
        });
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEl.remove();
        });
        todo.appendChild(todoEl);
        input.value = "";

    }
});
};
addTodo();
