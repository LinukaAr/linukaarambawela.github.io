const textElement = document.getElementById('text');
const text = "Programming with Green Color";

let index = 0;
let isTyping = true;

function typeText() {
    textElement.textContent = text.slice(0, index);
    if (isTyping) {
        index++;
        if (index > text.length) {
            isTyping = false;
            setTimeout(typeText, 2000); 
        } else {
            setTimeout(typeText, 100);
        }
    } else {
        textElement.textContent = text.slice(0, index);
        index--;
        if (index === 0) {
            isTyping = true;
            setTimeout(typeText, 1000); /
        } else {
            setTimeout(typeText, 50);
        }
    }
}

typeText();
