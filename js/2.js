// script.js

document.getElementById('count').addEventListener('click', function() {
    const inputElement = document.getElementById('input');
    const inputText = inputElement.value;
    const testText = document.getElementById('speed-test-text').innerText;

    if (!inputText.trim()) {
        alert("Please type something before counting.");
        return;
    }

    // Calculate words per minute (WPM)
    const wordsTyped = inputText.trim().split(/\s+/).length;
    const timeElapsed = 60; // Assuming the test is for 1 minute for simplicity
    const wpm = Math.round((wordsTyped / timeElapsed) * 60);

    // Calculate accuracy
    const inputWords = inputText.trim().split(/\s+/);
    const testWords = testText.trim().split(/\s+/);

    let correctWords = 0;
    for (let i = 0; i < Math.min(inputWords.length, testWords.length); i++) {
        if (inputWords[i] === testWords[i]) {
            correctWords++;
        }
    }

    const wordAccuracy = Math.round((correctWords / testWords.length) * 100);
    const characterAccuracy = calculateCharacterAccuracy(inputText, testText);

    // Update the statistics on the page
    document.getElementById('WPM').innerText = wpm;
    document.getElementById('WA').innerText = wordAccuracy + '%';
    document.getElementById('CA').innerText = characterAccuracy + '%';
    document.getElementById('Spell-err').innerText = countSpellingErrors(inputText, testText);
    document.getElementById('Gram').innerText = countGrammarErrors(inputText, testText);
});

// Function to calculate character accuracy
function calculateCharacterAccuracy(inputText, testText) {
    let correctCharacters = 0;
    const minLength = Math.min(inputText.length, testText.length);

    for (let i = 0; i < minLength; i++) {
        if (inputText[i] === testText[i]) {
            correctCharacters++;
        }
    }

    return Math.round((correctCharacters / testText.length) * 100);
}







let timer;
let timeElapsed = 0;
let isTyping = false;

const inputField = document.getElementById('input');
const timeDisplay = document.getElementById('Time');

inputField.addEventListener('focus', startTimer);
inputField.addEventListener('input', () => {
    if (!isTyping) {
        isTyping = true;
    }
});
inputField.addEventListener('blur', stopTimer);

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            timeElapsed++;
            timeDisplay.textContent = `${timeElapsed}s`;
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    isTyping = false;
}

// Optional: Reset timer when counting words
document.getElementById('count').addEventListener('click', () => {
    clearInterval(timer);
    timeElapsed = 0;
    timeDisplay.textContent = '0s';
    timer = null;
    isTyping = false;
});