
//Первая задача
function extractNumber(str) {
    return str.match(/\d+/g).map(Number);
}
console.log(extractNumber("a1fg5hj6"));

//Вторая задача
function number(n1, n2) {
    if (n1 > 144) return;
    console.log(n1);
    setTimeout(() => {
      number(n2, n1 + n2);
    }, 1000);
  }
  number(0, 1);

//Третья задача
async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Ошибка', error);
    }
}
fetchProductTitles();

//Четвертая задача
const buttonContainer = document.querySelector('.buttons');
buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent;
        document.body.style.backgroundColor = color.toLowerCase();
    }
});

//Пятая задача
const square = document.getElementById('square');
const pressBtn = document.getElementById('pressBtn');
pressBtn.addEventListener('click', () => {
    if (square.style.display === 'none') {
        square.style.display = 'block';
        pressBtn.textContent = 'Скрыть блок';
    } else {
        square.style.display = 'none';
        pressBtn.textContent = 'Показать блок';
    }
});

//Шестая задача
let count = 0;
const counterElement = document.getElementById('counter');
const interval = setInterval(() => {
    count++;
    counterElement.textContent = count;

    if (count >= 100) {
        clearInterval(interval);
    }
}, 1);


//Седьмая задача
document.getElementById("fetchbtn").addEventListener("click", async () => {
    try {
        const response = await fetch("products.json");
        if (!response.ok) {
            throw new Error("ошибка");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("ошибка", error);
    }
});
3