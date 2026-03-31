// The story sequence for Day 1
const steps = [
    "Good morning ❤️❤️❤️\n\nToday is not just a normal day.\nThis dark sky hides a bright secret... ✨",
    "This is where something small...\nbut infinitely special begins.\nSomething crafted just for you ❤️",
    "A little digital space,\nbuilt with love and a bit of magic. ✨\nEvery day, a new piece of my heart for you.",
    "I can't wait to celebrate the most amazing person I know.\nAre you ready for the countdown? ❤️",
    "Day 1 is starting now... ✨\nClose your eyes... get ready."
];

let currentStep = 0;
let typingInterval;

// DOM Elements
const introScreen = document.getElementById('intro-screen');
const mainScreen = document.getElementById('main-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const messageText = document.getElementById('message-text');
const backgroundContainer = document.getElementById('floating-background');

// Words to float in the background
const sweetWords = [
    'honeybun', 'I love you ❤️', 'thangoo', 
    'pattu', 'ammu', 'pani bommai', '✨', '❤️'
];

// Initialize background immediately
createFloatingWords();

// Handle initial entry
startBtn.addEventListener('click', () => {
    introScreen.classList.remove('active');
    
    // Increase the intensity/amount of floating words when they enter
    createFloatingWords(15); 
    
    setTimeout(() => {
        mainScreen.classList.add('active');
        setTimeout(() => {
            typeText(steps[currentStep]);
        }, 600);
    }, 1000); 
});

// Handle moving through the message
nextBtn.addEventListener('click', () => {
    currentStep++;
    
    if (currentStep < steps.length) {
        nextBtn.classList.add('hidden'); 
        typeText(steps[currentStep]);

        if (currentStep === steps.length - 1) {
            nextBtn.innerText = "See you tomorrow ✨❤️✨";
        }
    } else {
        messageText.innerHTML = "Day 1 is officially unlocked. ✨\n\nSmile today.\nMy beautiful honeybun. ❤️";
        nextBtn.classList.add('hidden');
    }
});

// Function to generate floating text all over the page
function createFloatingWords(amount = 25) {
    for (let i = 0; i < amount; i++) {
        const wordEl = document.createElement('div');
        wordEl.className = 'floating-word';
        wordEl.innerText = sweetWords[Math.floor(Math.random() * sweetWords.length)];
        
        // Randomize placement across the entire viewport width
        wordEl.style.left = `${Math.random() * 100}vw`;
        
        // Randomize sizes (keep them elegant, not too massive)
        const size = 0.8 + Math.random() * 1.5;
        wordEl.style.fontSize = `${size}rem`;
        
        // Randomize opacity (keep it subtle so it doesn't distract from the main text)
        const opacity = 0.15 + Math.random() * 0.3;
        wordEl.style.setProperty('--target-opacity', opacity);
        
        // Randomize drift (how far left/right they sway while moving up)
        const drift = (Math.random() * 40 - 20); // -20vw to +20vw
        wordEl.style.setProperty('--drift', `${drift}vw`);
        
        // Randomize speed and delay for an organic, continuous flow
        wordEl.style.animationDuration = `${15 + Math.random() * 25}s`; 
        wordEl.style.animationDelay = `-${Math.random() * 30}s`; // Negative delay starts them mid-animation
        
        backgroundContainer.appendChild(wordEl);
    }
}

// Core typing animation function
function typeText(text) {
    clearInterval(typingInterval);
    messageText.innerHTML = "";
    
    let i = 0;
    typingInterval = setInterval(() => {
        if (i < text.length) {
            messageText.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            nextBtn.classList.remove('hidden');
        }
    }, 30); 
}