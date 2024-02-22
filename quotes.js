// The welcome container and its content
const welcomeContainer = document.querySelector('.WelcomeContainer');
const typewritten = document.getElementById('typewritten');
const welcomeCont = document.getElementById('welcomeCont');

// // The quotes container content in the home container
const quotesContainer = document.querySelector(".quotesContainer");

// Store the text to be typewritten
const text = typewritten.textContent;

// Clear the content in the first place because it is going to be typewriten
typewritten.textContent = '';

// Set the initial index
let index = 0;
let interval;

// Delay the start of the typewritting for 3 seconds
setTimeout(() => {
    // Create an interval that adds one character at a time
    interval = setInterval(() => {
        typewritten.textContent += text[index]; // Add one character from the text("life changing quotes")
        // Move to the next character(index)
        index++;

        // Clear the interval from continuing to add characters to the typewrittenParagraph
        if (index >= text.length) {
            clearInterval(interval);
        }
    }, 200);
}, 3000);

// The home container
const homeContainer = document.createElement("div");
homeContainer.classList.add("homeContainer", "flex_container");
homeContainer.id = 'hmContainer';

// Fade out the welcome container and fade in the home container
setTimeout(() => {
    homeContainer.classList.add("fadeIn");
    welcomeContainer.classList.add('fadeOut')
}, 14000)
// Remove the welcome container after 10 seconds and add the home container
setTimeout(() => {
    document.body.appendChild(homeContainer);
    welcomeCont.style.display = "none";
}, 15000);

// The container inside the Home container
const quotesGroupContainer = document.createElement("div");
quotesGroupContainer.classList.add("quotesGroupContainer");
quotesGroupContainer.id = 'qsGroupContainer';
quotesGroupContainer.innerHTML = `
<h1>Quotes</h1>
<hr>
<div class="quotesContainer" id="quotesCont">
    <div class="quotesGroup" id="authorsGroup">Authors</div>
    <div class="quotesGroup" id="loveGroup">Love</div>
    <div class="quotesGroup" id="humourGroup">Humour</div>
    <div class="quotesGroup" id="courageGroup">Courage</div>
    <div class="quotesGroup" id="lifeGroup">Life</div>
    <div class="quotesGroup" id="wisdomGroup">Wisdom</div>
    <div class="quotesGroup" id="familyGroup">Family</div>
    <div class="quotesGroup" id="patienceGroup">Patience</div>
    <div class="quotesGroup" id="successGroup">Success</div>
    <div class="quotesGroup" id="happinessGroup">Happiness</div>
    <div class="quotesGroup" id="motivationGroup">Motivation</div>
    <div class="quotesGroup" id="inspirationGroup">Inspiration</div>
    <div class="quotesGroup" id="timeGroup">Time</div>
</div>
`;
homeContainer.appendChild(quotesGroupContainer);
// The end of the home container

// // Click events in the home container
// const quotesContainer = document.querySelector(".quotesContainer");
// quotesContainer.addEventListener('click', (e) => {
//     if (e.target.id == authorsGroup) {
//         homeContainer.style.display = 'none';
//     }
// });