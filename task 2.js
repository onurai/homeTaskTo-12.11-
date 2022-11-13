const first = document.querySelectorAll('.first');
const third = document.querySelectorAll('.third');

const click = document.querySelector('.click');
function changeItems(){
    first.forEach(element => {
        element.textContent = "first"
    });
    third.forEach(element => {
        element.textContent = "last"
    });
}
click.addEventListener('click', changeItems)











