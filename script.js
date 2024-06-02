let textArray = [];

function postText() {
    const textInput = document.getElementById("textInput").value;
    textArray.push(textInput);
    displayText();
}

function displayText() {
    const textContainer = document.getElementById("textContainer");
    textContainer.innerHTML = "";
    textArray.forEach(text => {
        const textElement = document.createElement("p");
        textElement.textContent = text;
        textContainer.appendChild(textElement);
    });
}
