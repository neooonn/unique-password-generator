const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatedEl = document.querySelector(".generated-el");
const generateBtn = document.querySelector(".generate-btn");
const copyEl = document.querySelector(".copy-el");
let isGenerated = false;

// GENERATE RANDOM PASSWORD FUNCTION
function generatePassword() {   
    if (generatedEl.textContent !== "") {
        generatedEl.textContent = ""; // Clear the previous password
        for (let i = 0; i < 11; i++) {
            let random = Math.floor(Math.random() * characters.length);
            generatedEl.textContent += characters[random];
        }
    } else {
        for (let i = 0; i < 11; i++) {
            let random = Math.floor(Math.random() * characters.length);
            generatedEl.textContent += characters[random];
        }
    }
}

// COPY PASSWORD TO CLIPBOARD FUNCTION
function copyToClipboard() {
    const password = generatedEl.textContent;
    let message = "Copied to the clipboard!"
    if (password) {
        navigator.clipboard.writeText(password)
        .then(() => {
            copyEl.textContent = message;
            // Clear the message after 1 seconds (1000 milliseconds)
            setTimeout(() => {
                copyEl.textContent = "";
            }, 1000);
        })
        .catch(err => {
            console.error("Failed to copy password: ", err);
        });
        
    }
}