// Function to add a message to the chat log
function addMessageToLog(message, sender) {
    const chatLog = document.getElementById("chat-log");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
}

// Function to handle user input and generate a response
function handleUserInput() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim();

    if (userMessage !== "") {
        addMessageToLog(userMessage, "user");
        userInput.value = ""; // Clear input field

        // Send user message to the server and retrieve bot response
        // Replace the following line with your backend integration code
        const botResponse = getBotResponse(userMessage);

        addMessageToLog(botResponse, "bot");
    }
}

// Event listener for the send button
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", handleUserInput);

// Event listener for the Enter key
const userInput = document.getElementById("user-input");
userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
});

// Dummy function to simulate bot response
function getBotResponse(userMessage) {
    // Replace this with your logic to send the user message to your ChatGPT model and retrieve the bot's response
    // You may use APIs, SDKs, or libraries to communicate with the model

    // Here's a basic example that returns a predefined response
    if (userMessage.toLowerCase().includes("hello")) {
        return "Hi there! How can I assist you?";
    } else {
        return "I'm sorry, I didn't understand that.";
    }
}
