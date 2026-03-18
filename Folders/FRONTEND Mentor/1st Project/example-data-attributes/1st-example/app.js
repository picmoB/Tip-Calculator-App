let btn = document.querySelector('button');

// Get the value of the [data-click] attribute
// returns "count"
let click = btn.getAttribute('data-click');

// Set a value for the [data-count] attribute
// <button data-count="up">Count Up</button>
btn.setAttribute('data-count', 'up');

// Remove the [data-click] attribute
btn.removeAttribute('data-click');

// Check if an element has the `[data-toggle]` attribute
if (btn.hasAttribute('data-toggle')) {
	console.log('Toggle something, dude!');
}
