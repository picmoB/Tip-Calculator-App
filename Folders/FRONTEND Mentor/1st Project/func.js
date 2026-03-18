// =================================================================
// Title Buttons & Data Filter
// =================================================================

const titleBtns = document.querySelector(".title-btns");
const titleBtnArray = Array.from(titleBtns.children);

function titleActive(index) {
    console.log("Clicked")
    titleBtnArray.forEach((title, num) => {
        title.classList.remove("active");
        if(num == index) {
            title.classList.add("active");
        }

        const titleDataType = titleBtnArray[index].getAttribute('data-type');
        elHolder.forEach((elHolderEach) => {
            if(elHolderEach.getAttribute('data-type') === titleDataType || titleDataType === "all") {
                elHolderEach.style.display = "flex"; 
            } else {
                elHolderEach.style.display = "none"; 
            }
        });
    });
}

for(let i = 0; i < titleBtnArray.length; i++) {
    const titleBtn = titleBtnArray[i];
    
    titleBtn.addEventListener("click", () => titleActive(i));
}

// =================================================================
// Adding Data-Types to Titles and Toggle Buttons
// =================================================================

const btnTitle = document.querySelectorAll(".btn-title-div");
const btnToggle = document.querySelectorAll(".toggle-data");
const elHolder = document.querySelectorAll(".el-holder");
const elHolderWrapper = document.querySelector(".main-project");
const elHolderArray = Array.from(elHolderWrapper.children);

/* Toggle Buttons Data */
btnToggle.forEach((btnToggleEach) => {
    let counter = 0;    /* Added variable here! */
    btnToggleEach.addEventListener("click", () => {

        counter++;
        console.log(`Length: ${elHolder.length}`);   // 12

        // Create a code that will toggle class-list to "active" or "inactive"
        btnToggleEach.classList.toggle("active");
        btnToggleEach.classList.toggle("inactive");

        // Create a code that will toggle/change data-type to "active" or "inactive"
        const dataId = btnToggleEach.getAttribute('data-id');
        const dataIdNum = parseInt(dataId);
        const elHolderNum = elHolderArray[dataIdNum];

        if(counter % 2 === 1) {
            btnToggleEach.setAttribute('data-type', 'active');
            elHolderNum.setAttribute('data-type', 'active');
        } else {
            btnToggleEach.setAttribute('data-type', 'inactive');
            elHolderNum.setAttribute('data-type', 'inactive');
        }

        // Debugging:
        console.log(`Data-ID Number: ${dataIdNum}`);
        console.log(`Is it an integer? ${Number.isInteger(dataIdNum)}`);

        console.log("Clicked Toggle");
        console.log(btnToggleEach);
    });
});

/* Title Buttons Data */
btnTitle.forEach((btnTitleEach) => {
    const dataTypeTitle = btnTitleEach.getAttribute('data-type');
    btnTitleEach.addEventListener("click", () => {
        // Debugging:
        console.log(dataTypeTitle);
    });
});

// Create a toggle dark/light mode with CSS, together with JavaScript functionality

// =================================================================
// Toggle Dark and Light Mode
// =================================================================

const toggleBtn = document.querySelector(".toggle-btn");
const htmlDoc = document.querySelector(".html-doc");

let counter = 0;

toggleBtn.addEventListener("click", () => {
    console.log("Clicked");

    htmlDoc.classList.toggle("light");

    counter++;

    if(counter % 2 === 1) {
        toggleBtn.innerHTML = "";
        toggleBtn.innerHTML += 
        `<img src="assets/images/icon-moon.svg" alt="logo-toggle">`;
    } else {
        toggleBtn.innerHTML = "";
        toggleBtn.innerHTML += 
        `<img src="assets/images/icon-sun.svg" alt="logo-toggle">`;
    }
});

// =================================================================
// 'Remove' Button Functionality (removes el-holder)
// =================================================================

const removeBtn = document.querySelectorAll(".lower-btn");
const removeBtnArray = Array.from(removeBtn);
console.log(removeBtnArray.length);     // 12

const modal = document.querySelector(".modal-overlay");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function holderActive(index) {
    elHolderArray.forEach((holder, num) => {
        holder.classList.remove("active");
        if(num == index) {
            holder.classList.add("active");
        }
    });
}

for(let x = 0; x <= elHolderArray.length; x++) {
    const btnRemoveEach = removeBtnArray[x];

    btnRemoveEach.addEventListener("click", () => {

        holderActive(x);

        // Create a modal function to confirm deletion of element from HTML
        modal.classList.add("open-modal");

        btnYes.addEventListener("click", () => {
            if(elHolderArray[x].classList.contains("active")) {
                elHolderArray[x].remove(self);
            }
            modal.classList.remove("open-modal");
        });

        btnNo.addEventListener("click", () => {
            if(elHolderArray[x].classList.contains("active")) {
                elHolderArray[x].classList.remove("active");
            }
            modal.classList.remove("open-modal");
        });
    });

    // *** IMPORTANT!!! ***
    // I have to add 'active' class to the element that has been provoked,
    // so it could be easier for deleting specific el-holder that matters at the time,
    // but not to forget: even if we select 'No', I have to remove 'active' class
    // from that element! Basically, this class will serve the purpose which element
    // should be deleted or not. (I did it!)
}
