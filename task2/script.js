const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоле')
})

document.querySelector('#alert').addEventListener('click', 
  (event) => {
    alert('Служит для вывода информации в всплывающее окно');
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    prompt('Служит для для ввода информации. Понятно?', 'Да');
})
