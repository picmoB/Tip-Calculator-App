// ==============================================================================================================
// Storing Values from Input into Variables
// ==============================================================================================================

const generateBtn = document.querySelector(".generate-btn");

// User Input Text Variables:
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userGitHub = document.getElementById("username");

// User Input Image Variable:
const avatar = document.getElementById("avatar");
const avatarChange = document.getElementById("avatarChange");
const dragAvatar = document.getElementById("dropZone");
let fileDaD = null;     /* Drag & Drop Image Capture */

document.addEventListener("submit", generateBtnEvent);

function generateBtnEvent(ev) {
    ev.preventDefault();        // Prevent default form submission
    const[fileInput] = avatar.files;
    const[fileChange] = avatarChange.files;
    const maxSize = 1024 * 500;  // 500KB size
    if (fileInput) {
        if (fileInput.size > maxSize) {
            document.getElementById("txt-info").textContent = "File too large. Please upload a photo under 500KB.";
            document.getElementById("txt-info").style.setProperty('color', 'red');
            document.getElementById("img-info").style.setProperty('background-color', 'red');
            return;     // Abort if the file is too large
        }
        // Upload image to ticket
        document.querySelector(".uploaded-img-info").src = URL.createObjectURL(fileInput);

        // Change text info and style when successfully uploaded
        document.getElementById("txt-info").textContent = "File uploaded!";
        document.getElementById("txt-info").style.setProperty('color', 'green');
        document.getElementById("img-info").style.setProperty('background-color', 'green');

        console.log(`${fileInput.name}`);       // For debugging purposes
    } else if (fileDaD) {
        if (fileDaD.size > maxSize) {
            document.getElementById("txt-info").textContent = "File too large. Please upload a photo under 500KB.";
            document.getElementById("txt-info").style.setProperty('color', 'red');
            document.getElementById("img-info").style.setProperty('background-color', 'red');
            return;     // Abort if the file is too large
        }
        // Upload image to ticket
        document.querySelector(".uploaded-img-info").src = URL.createObjectURL(fileDaD);

        // Change text info and style when successfully uploaded
        document.getElementById("txt-info").textContent = "File uploaded!";
        document.getElementById("txt-info").style.setProperty('color', 'green');
        document.getElementById("img-info").style.setProperty('background-color', 'green');

        console.log(`${fileDaD.name}`);         // For debugging purposes
    } else if (fileChange) {
        if (fileChange.size > maxSize) {
            document.getElementById("txt-info").textContent = "File too large. Please upload a photo under 500KB.";
            document.getElementById("txt-info").style.setProperty('color', 'red');
            document.getElementById("img-info").style.setProperty('background-color', 'red');
            return;     // Abort if the file is too large
        }
        // Upload image to ticket
        document.querySelector(".uploaded-img-info").src = URL.createObjectURL(fileChange);

        // Change text info and style when successfully uploaded
        document.getElementById("txt-info").textContent = "File uploaded!";
        document.getElementById("txt-info").style.setProperty('color', 'green');
        document.getElementById("img-info").style.setProperty('background-color', 'green');

        console.log(`${fileChange.name}`);      // For debugging purposes
    } else {
        document.getElementById("txt-info").textContent = "No files added!";
        document.getElementById("txt-info").style.setProperty('color', 'rgba(255, 255, 255, 0.5)');
        document.getElementById("img-info").style.removeProperty('background-color');

        console.log("No files added!");         // For debugging purposes
    }
    // Check email format
    let emailInfo = document.getElementById("email-info");
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(userEmail.value) === false) {
        console.log("Invalid email format.");
        multipleProps(emailInfo, {"display": "flex", "color": "red"});
        return;
    }
    // Remove email info if it's valid
    emailInfo.remove();

    // Get these values
    getTextInputValues();

    // Set properties in this function for an element below
    setInterval(setTimer, 1000);

    // Add fade in/out animation
    document.querySelector(".coding-conf").classList.add("fade-out");
    document.querySelector(".main-part").classList.add("fade-out");
    document.querySelector(".loading-screen").classList.add("fade-in-and-out");
}

function getTextInputValues() {
    /* name */
    let name = document.getElementById("name").value;
    let uploadedName = document.querySelectorAll(".uploadedName");

    // Change 'innerHTML' to set the value of 'name' ID
    // Using forEach() since it contains same multiple classes
    uploadedName.forEach((span) => {
        span.innerHTML = "";
        span.innerHTML +=
        `
            <span>${name}</span>
        `;
    });

    /* email */
    let email = document.getElementById("email").value;
    let uploadedEmail = document.querySelector(".uploadedEmail");

    // Change 'innerHTML' to set the value of 'email' ID
    uploadedEmail.innerHTML = "";
    uploadedEmail.innerHTML +=
    `
        <span>${email}</span>
    `;

    /* username */
    let username = document.getElementById("username").value;
    let uploadedUserName = document.querySelector(".uploadedUserName");

    // Change 'innerHTML' to set the value of 'username' ID
    uploadedUserName.innerHTML = "";
    uploadedUserName.innerHTML +=
    `
        <span>@${username}</span>
    `;
}

// ==============================================================================================================
// Drag & Drop Images to Web Page
// ==============================================================================================================

document.querySelector(".upload-img-btn").addEventListener("input", btnInputHandler);
document.querySelector(".change-img-btn").addEventListener("input", changeInputHandler);

// Input Mask Variable
let inputMask = document.querySelector(".input-mask");

function btnInputHandler() {
    console.log("File selected.");

    // Delete fileDaD in case if it persist
    fileDaD = null;

    avatar.onchange = evt => {
        const[file] = avatar.files;
        if(file) {
            // Upload image to HTML element
            uploadedImg.src = URL.createObjectURL(file);
        }
        // Update UI after uploading
        uploadedImg.removeAttribute("hidden");
        uploadImgAreaButtons.removeAttribute("hidden");
        uploadImgText.setAttribute("hidden", "");
        avatar.innerHTML +=
        `
            <style>
                visibility: hidden;
            </style>
        `;

        // Edit style using setProperty
        inputMask.style.setProperty('display', 'none');
        uploadImgAreaButtons.style.setProperty('display', 'flex');
    }
}

function changeInputHandler() {
    console.log("File changed.");

    // Delete files
    $('#avatar').val('');   /* File Input */
    fileDaD = null;         /* File DaD */

    avatarChange.onchange = evt => {
        const[file] = avatarChange.files;
        if(file) {
            // Upload image to HTML element
            uploadedImg.src = URL.createObjectURL(file);
            avatar.removeAttribute("required");
        }
    }
}

function dropHandler(ev) {
    console.log("File dropped.");

    // Prevent default behaviour from opening the file.
    ev.preventDefault();

    // Delete fileInput in case if it persist
    $('#avatar').val('');

    if(ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        [...ev.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if(item.kind === "file") {
                const file = item.getAsFile();
                console.log(`… file[${i}].name = ${file.name}`);

                // Declare value of fileDaD from dropped file
                fileDaD = file;

                // Upload image to HTML element
                uploadedImg.src = URL.createObjectURL(file);
                avatar.removeAttribute("required");
            }
            // Update UI after uploading
            uploadedImg.removeAttribute("hidden");
            uploadImgAreaButtons.removeAttribute("hidden");
            uploadImgText.setAttribute("hidden", "");
            avatar.innerHTML +=
            `
                <style>
                    visibility: hidden;
                </style>
            `;

            // Edit style using setProperty
            inputMask.style.setProperty('display', 'none');
            uploadImgAreaButtons.style.setProperty('display', 'flex');
        });
    } else {
        // Use DataTransfer interface to access the file(s)
        [...ev.dataTransfer.files].forEach((file, i) => {
            console.log(`… file[${i}].name = ${file.name}`);
        });
    }

    // Pass event to removeDragData for cleanup
    removeDragData(ev);
}

function dragOverHandler(ev) {
    // Prevent default behaviour from opening the file.
    ev.preventDefault();
}

function removeDragData(ev) {
    console.log("Removing drag data");

    if(ev.dataTransfer.items) {
        // Use DataTransferItemList interface to remove the drag data
        ev.dataTransfer.items.clear();
    }
}

// ==============================================================================================================
// Remove & Change Image Buttons
// ==============================================================================================================

const removeImgBtn = document.getElementById("removeImg");

function removeImgFunc() {
    const[file] = avatar.files;
    const[fileChange] = avatarChange.files;
    if(file) {
        console.log("Input File deleted.", file.name);
        URL.revokeObjectURL(file);
    } else if (fileDaD) {
        console.log("DaD File deleted.", fileDaD.name);
        URL.revokeObjectURL(fileDaD);
    } else if (fileChange) {
        console.log("Changed File deleted.", fileChange.name);
        URL.revokeObjectURL(fileChange);
    }
    // Delete files from all types of input
    $('#avatar').val('');
    $('#avatarChange').val('');
    fileDaD = null;

    // Update UI after removing
    avatar.setAttribute("required", "");
    uploadedImg.setAttribute("hidden", "");
    uploadImgAreaButtons.setAttribute("hidden", "");
    uploadImgText.removeAttribute("hidden");
    avatar.innerHTML +=
    `
        <style>
            visibility: visible;
        </style>
    `;

    // Edit style using setProperty
    inputMask.style.setProperty('display', 'flex');
    uploadImgAreaButtons.style.setProperty('display', 'none');

    // Edit image info style
    document.getElementById("txt-info").textContent = "Upload your photo (JPG or PNG, max size: 500KB).";
    document.getElementById("txt-info").style.setProperty('color', 'rgba(255, 255, 255, 0.5)');
    document.getElementById("img-info").style.removeProperty('background-color');
}

removeImgBtn.addEventListener("click", removeImgFunc);

// ==============================================================================================================
// Show/Hide HTML Elements
// ==============================================================================================================

function multipleProps(el, props) {
    for (var key in props) {
        el.style.setProperty(key, props[key]);
    }
}

// ==============================================================================================================
// Timeout Function
// ==============================================================================================================

let seconds = 0;

function setTimer() {
    let loadingScreen = document.querySelector(".loading-screen");
    
    seconds++;

    if (seconds === 2) {
        multipleProps(loadingScreen, {"display": "flex", "width": "0px", "margin-left": "auto", "margin-right": "auto", "margin-top": "450px", "justify-content": "center"});
    }
    if (seconds === 12) {
        document.querySelector(".ticket-generated").style.setProperty("display", "flex");
        document.querySelector(".ticket-generated").classList.add("fade-in");
    }
}
