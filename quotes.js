// The welcome container and its content
const welcomeContainer = document.querySelector('.welcomeContainer');
const typewritten = document.getElementById('typewritten');
const welcomeCont = document.getElementById('welcomeCont');


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
    welcomeCont.remove();
}, 15000);

// The container inside the Home container
const quotesGroupContainer = document.createElement("div");
quotesGroupContainer.classList.add("quotesGroupContainer");
quotesGroupContainer.id = 'qsGroupContainer';
quotesGroupContainer.innerHTML = `
<h1>Quotes Categories</h1>
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

// Click events in the home container
const quotesContainer = document.querySelector(".quotesContainer"); 
const quotesGroup = document.querySelector(".quotesGroup");

quotesGroupContainer.addEventListener('click', (e) => {
    if (e.target.textContent == "Authors") {
        hideHomeContainer();
        displayAuthors();
    }
});

function hideHomeContainer() {
    quotesGroupContainer.style.display = 'none';
}

// function unhideHomeContainer() {
//     homeContainer.style.display = 'block';
// }

function displayAuthors() {
    const authorsContainer = document.createElement("div");
    authorsContainer.classList.add("authors_container", "fadeIn");
    authorsContainer.innerHTML = `
    <h1>Authors</h1>
    <hr>
    <div class="authorsHolder" id="authorsHold">
        <div class="authorsGroup" id="abraham">
            <img src="lincoln.webp" alt="abraham lincol image"> 
            <p><span style="color: blue;">"</span>Whatever you are, be a good one.<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="albert">
            <img src="einsten.webp" alt="einsten image"> 
            <p style="color: white;"><span style="color: blue;">"</span>The only source of knowledge is experience.<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="aristotle">
            <img src="aristotle.webp" alt="aristotle image">
            <p style="color: black;"><span style="color: red;">"</span>It is the mark of an educated mind to be able to entertain a thought without accepting it.<span style="color: magenta;">"</span></p>
        </div>

        <div class="authorsGroup" id="audre">
            <img src="audre.webp" alt="audre image">
            <p style="color: red;"><span style="color: blue;">"</span>I am deliberate and afraid of nothing<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="budhaa">
            <img src="budhaa.jpg" alt="budhaa image">
            <p style="color: fuchsia;"><span style="color: blue;">"</span>In the end, only three things matter: how much you loved,...<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="mahatma">
            <img src="mahatma.jpeg" alt="mahatma image">
            <p><span style="color: blue;">"</span>The best way to find yourself is to...<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="khalil">
            <img src="khalil.jpeg" alt="khalil image">
            <p><span style="color: blue;">"</span>Out of suffering have emerged the strongest souls; the most massive characters are seared with scars..<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="sunTzu">
            <img src="sun.jpeg" alt="sunTzu image">
            <p style="color: white;"><span style="color: blue;">"</span>Appear weak when you are strong, and strong when you are weak..<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="confucius">
            <img src="cofucius.jpeg" alt="confucius image">
            <p style="color: black;"><span style="color: blue;">"</span>To see what is right and not do it is the want of courage.<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="ziglar">
            <img src="ziglar.webp" alt="ziglar image">
            <p style="color: white;"><span style="color: blue;">"</span>You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="jobs">
            <img src="jobs.jpg" alt="jobs image">
            <p style="color: fuchsia;"><span style="color: blue;">"</span>Your work is going to fill a large part of your life, and the...<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="socrates">
            <img src="Socrates.jpg" alt="Socrates image">
            <p><span style="color: blue;">"</span>An unexamined life is not worth living<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="churchill">
            <img src="churchill.jpg" alt="churchill image">
            <p style="color: white;"><span style="color: blue;">"</span>We make a living by what we get, but we make a life by what we give.<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="shakespear">
            <img src="shakespear.jpeg" alt="shakespear image">
            <p style="color: white;"><span style="color: blue;">"</span>All the world's a stage, and all the men and women merely players.<span style="color: lime;">"</span></p>
        </div>

        <div class="authorsGroup" id="luther">
            <img src="luther.webp" alt="luther image">
            <p style="color: fuchsia;"><span style="color: blue;">"</span>Injustice anywhere is a threat to justice everywhere.<span style="color: lime;">"</span></p>
        </div>
    </div>
    `;
    homeContainer.appendChild(authorsContainer);
}

