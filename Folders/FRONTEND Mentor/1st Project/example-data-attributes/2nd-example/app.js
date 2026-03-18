// Get the `data-message` attribute of the `ele` element
const h1title = document.getElementById("h1-title");

// Set the data attribute's value
`
const message01 = h1title.setAttribute('data-toggle', 'hello-world');       /* Mijenja! */
const message02 = h1title.setAttribute('data-toggle', 'bitch-ass-nigga');
`
const btnData = document.getElementById('data-btn');

let counter = 0;    /* It's important to set this variable at the GLOBAL scope! */

/* IT WORKS!!! */
function counterNum() {
    //let counter = 0;
    counter++;
    console.log(`Counter: ${counter}`);

    if(counter % 2 === 1) {
        h1title.removeAttribute('data-toggle');
        h1title.setAttribute('data-toggle', 'hello-world');
    } else {
        h1title.removeAttribute('data-toggle');
        h1title.setAttribute('data-toggle', 'bitch-ass-nigga');
    }
}

btnData.addEventListener("click", counterNum);
    //let counter = 1;
    //counter++;      /* It's counting nonetheless */
    //console.log(`Counter: ${counter}`);
    
    // Use 'for' loop instead!

    /*  For loop:
    for(let counter = 0; counter++; ) {
        if(counter % 2 === 1) {
            h1title.removeAttribute('data-toggle');
            h1title.setAttribute('data-toggle', 'hello-world');
        } else if(counter % 2 === 0) {
            h1title.removeAttribute('data-toggle');
            h1title.setAttribute('data-toggle', 'bitch-ass-nigga');
        }
        return counter;
    }
    */

    /*  While loop:
    while(counter++) {
        console.log(`Counter: ${counter}`);
        if(counter % 2 === 1) {
            h1title.removeAttribute('data-toggle');
            h1title.setAttribute('data-toggle', 'hello-world');
        } else if(counter % 2 === 0) {
            h1title.removeAttribute('data-toggle');
            h1title.setAttribute('data-toggle', 'bitch-ass-nigga');
        }
        return counter;
    }
    */

    /*  if statement (slightly changed from original):
    if(counter % 2 === 1) {
        h1title.removeAttribute('data-toggle');
        h1title.setAttribute('data-toggle', 'hello-world');
        counter++;
        return counter;
    } else if(counter % 2 === 0) {
        h1title.removeAttribute('data-toggle');
        h1title.setAttribute('data-toggle', 'bitch-ass-nigga');
        counter++;
        return counter;
    }
    */

    /*
    if(counter % 2 === 1) {
        h1title.removeAttribute('data-toggle');
        h1title.setAttribute('data-toggle', 'hello-world');
    } else if(counter % 2 === 0) {
        h1title.removeAttribute('data-toggle');
        h1title.setAttribute('data-toggle', 'bitch-ass-nigga');
    }
    */ 


// Remove the data attribute
// message.removeAttribute('data-message');

`
// It works! Just some minor changes and we're off to go!
btnData.addEventListener("click", () => {
    if (h1title.hasAttribute('data-toggle')) {
        h1title.setAttribute('data-toggle', 'hello-world');
        h1title.setAttribute('data-toggle', 'bitch-ass-nigga');
    }
});

// Just for experiment:
const message01 = h1title.setAttribute('data-toggle', 'hello-world');       /* Mijenja! */
const message02 = h1title.setAttribute('data-toggle', 'bitch-ass-nigga');

// Just for experiment:
if (h1title.hasAttribute('data-toggle')) {
        h1title.toggleAttribute('data-toggle', "hello-world");
        h1title.toggleAttribute('data-toggle', "bitch-ass-nigga");
    }

`
