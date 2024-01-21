const button = document.querySelector ('.button_hello');

button.onclick = function (event) {
    this.remove();

    const parent = document.querySelector('.parent');
    const text = document.createElement('h1');
    text.innerHTML = 'Привет, пользователь!';

    parent.appendChild(text);
}



