document.querySelector('#link').addEventListener('click', 
  (event) => {
    event.preventDefault();
    const userText = prompt('Введите текст');
    link.textContent = userText;
})