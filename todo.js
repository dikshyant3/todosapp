const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener('submit', (e) => {
    e.preventdefault();

    const todo = input.value;
});