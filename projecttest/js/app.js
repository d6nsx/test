// первая задача
const checkInput = document.querySelector('#checker_input');
const checkButton = document.querySelector('#checker_button');
const checkResult = document.querySelector('#checker_result');

const regExp = /^[0-9]/i;
checkButton.onclick = () => {
    if (regExp.test(checkInput.value)) {
        checkResult.innerHTML = 'Все правильно!'
        checkInput.style.borderColor = 'green'
        checkInput.style.Color = 'green'
    }
    else {
        checkResult.innerHTML = 'Неправильно!'
        checkInput.style.borderColor = 'red'
        checkInput.style.Color = 'red'

    }
}

//вторая задача


const timer = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}

timer();


//третья задача
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();

//четвертая задача
document.addEventListener('DOMContentLoaded', () => {
    const colorBlock = document.getElementById('colorBlock');

    colorBlock.addEventListener('click', () => {
        colorBlock.classList.toggle('bg-color');

    });
});