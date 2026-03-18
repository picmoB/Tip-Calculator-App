console.log('Javascript is cool');

let number = 5;
let string = 'picmoB';
let isCool = true;

if (number == 10) {
    console.log('Yeah buddy');
} else {
    console.log('Nope!')
}

/*document.getElementById('box').innerHTML = string;*/
document.getElementById('box').innerHTML = number + 5;

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

function foodList() {
    let groceries = ['Milk', 'Cheese', 'Eggs'];

    for(let j = 0; j < groceries.length; j++) {
        console.log(groceries[j]);
    }
}

foodList();     /* Calling a function */

document.getElementById('box').addEventListener('click', function() {
    alert('I got clicked!');
})
