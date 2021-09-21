const btn = document.querySelector('.btn-alert');
const colorBtn = document.querySelector('.blue-background');

btn.addEventListener('click', function(){
    alert('button clicked!')
})

// Change color functie uitgezet om de toggle functie toe te passen:

/* const changeColor = () => {
    colorBtn.classList.add("red-background");
}

colorBtn.addEventListener('click', changeColor); */

const toggleColor = () => {
    colorBtn.classList.toggle("red-background");
};

colorBtn.addEventListener('click', toggleColor);