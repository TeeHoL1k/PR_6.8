const input = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('button');

input.addEventListener("input", () => {
    duplicateField.textContent = input.value;
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(input.value);
    input.value = "";
    duplicateField.textContent = "";
});

