// ===============================
// Floating AI Chatbot Script
// ===============================

// Toggle chatbot visibility
function toggleChatbot() {
    const chatBox = document.getElementById("chatbot-box");
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}

// Add message to chat window
function addMessage(text, sender) {
    const messages = document.getElementById("chatbot-messages");
    const msg = document.createElement("div");

    msg.className = sender === "user" ? "user-msg" : "bot-msg";
    msg.innerHTML = `<strong>${sender === "user" ? "You" : "AI"}:</strong> ${text}`;

    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

// Send user message to backend
function sendMessage() {
    const input = document.getElementById("chatbot-input");
    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user");
    input.value = "";

    fetch("/ai-chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        addMessage(data.reply, "bot");
    })
    .catch(() => {
        addMessage("Server error. Please try again.", "bot");
    });
}

// Send on Enter key
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chatbot-input").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
