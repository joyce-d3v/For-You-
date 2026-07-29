// ===============================
// ELEMENTS
// ===============================

const yesButtons = document.querySelectorAll("button");
const questionCard = document.getElementById("questionCard");

const loadingScreen = document.getElementById("loading");
const heartSection = document.getElementById("heartSection");

const progressBar = document.querySelector(".progress-bar");
const loadingText = document.querySelector(".loading-text");

const heartContainer = document.getElementById("heartContainer");

const finalMessage = document.querySelector(".final-message");
const typedMessage = document.getElementById("typedMessage");

const sleepKitty = document.getElementById("sleepKitty");

const heartsContainer = document.querySelector(".hearts");
const sparklesContainer = document.querySelector(".sparkles");



// ===============================
// FLOATING HEARTS
// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },12000);

}

setInterval(createHeart,400);




// ===============================
// SPARKLES
// ===============================

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.animationDelay =
        Math.random() * 2 + "s";

    sparklesContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

setInterval(createSparkle,250);




// ===============================
// LOADING MESSAGES
// ===============================

const messages = [

    "Loading happiness... 💗",

    "Collecting kisses... 💕",

    "Gathering hugs... 🥹",

    "Making your surprise... ✨",

    "Almost there... ❤️"

];




// ===============================
// BUTTON CLICK
// ===============================

yesButtons.forEach(button=>{

    button.addEventListener("click",startExperience);

});




// ===============================
// START EXPERIENCE
// ===============================

function startExperience(){

    questionCard.style.opacity="0";
    questionCard.style.transform="scale(.92)";

    setTimeout(()=>{

        questionCard.classList.add("hidden");

        loadingScreen.classList.remove("hidden");

        startLoading();

    },700);

}




// ===============================
// LOADING BAR
// ===============================

function startLoading(){

    let progress=0;

    let messageIndex=0;

    loadingText.textContent=messages[0];

    const loading=setInterval(()=>{

        progress+=2;

        progressBar.style.width=progress+"%";

        if(progress%20===0 && messageIndex<messages.length-1){

            messageIndex++;

            loadingText.textContent=messages[messageIndex];

        }

        if(progress>=100){

            clearInterval(loading);

            setTimeout(()=>{

                loadingScreen.classList.add("hidden");

                heartSection.classList.remove("hidden");

                createLoveHeart();

            },700);

        }

    },90);

}

// ===============================
// CREATE THE "I LOVE YOU" HEART
// ===============================

function createLoveHeart(){

    heartContainer.innerHTML = "";

    const points = [];

const scale = window.innerWidth <= 600 ? 13 : 18;
const step = window.innerWidth <= 600 ? 0.12 : 0.08;

    // Heart equation
    const step = window.innerWidth <= 600 ? 0.12 : 0.08;

for(let t = 0; t < Math.PI * 2; t += step)

        const x = 16 * Math.pow(Math.sin(t),3);

        const y =
            13 * Math.cos(t)
            -5 * Math.cos(2*t)
            -2 * Math.cos(3*t)
            -Math.cos(4*t);

        const scale = window.innerWidth <= 600 ? 11 : 18;

points.push({

    x: x * scale,

    y: -y * scale

});

    }


    points.forEach((point,index)=>{

        const word = document.createElement("div");

        word.className = "love-word";

        // Mix text and hearts
        word.textContent =
            Math.random() > 0.25
            ? "I LOVE YOU"
            : "♡";

        // Start from random place
        word.style.left =
            (window.innerWidth * Math.random()) + "px";

        word.style.top =
            (window.innerHeight * Math.random()) + "px";

        word.style.opacity = "0";

        heartContainer.appendChild(word);

        setTimeout(()=>{

            word.style.opacity = "1";

            const spacing = window.innerWidth <= 600 ? 1.3 : 1;

word.style.left =
    `calc(50% + ${point.x * spacing}px)`;

word.style.top =
    `calc(45% + ${point.y * spacing}px)`;

        },index*55);

    });


    // Wait until heart finishes

    setTimeout(()=>{

        startHeartbeat();

    },points.length*40+1200);

}

// ===============================
// HEARTBEAT
// ===============================

function startHeartbeat(){

    const words = document.querySelectorAll(".love-word");

    let beat = false;

    setInterval(()=>{

        beat = !beat;

        words.forEach(word=>{

            word.style.transform = beat
                ? "scale(1.15)"
                : "scale(1)";

        });

    },800);

    setTimeout(()=>{

        typeMessage();

    },1800);

}



// ===============================
// TYPEWRITER
// ===============================

function typeMessage(){

    finalMessage.classList.remove("hidden");

    const text =
`Happy Girlfriend's Day! ❤️`;

    let i = 0;

    const typing = setInterval(()=>{

        typedMessage.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typing);

            setTimeout(showKitty,800);

            startPetals();

        }

    },75);

}



// ===============================
// SHOW SLEEPING KITTY
// ===============================

function showKitty(){

    sleepKitty.classList.remove("hidden");

    sleepKitty.classList.add("show");

}



// ===============================
// FALLING PETALS
// ===============================

function startPetals(){

    const petals = document.querySelector(".petals");

    setInterval(()=>{

        const petal = document.createElement("div");

        petal.innerHTML = "🌸";

        petal.style.position = "absolute";

        petal.style.left = Math.random()*100+"vw";

        petal.style.top = "-50px";

        petal.style.fontSize =
            (16+Math.random()*10)+"px";

        petal.style.opacity = ".9";

        petal.style.transition = "6s linear";

        petals.appendChild(petal);

        requestAnimationFrame(()=>{

            petal.style.top = "110vh";

            petal.style.transform =
                `translateX(${Math.random()*200-100}px)
                 rotate(${Math.random()*360}deg)`;

        });

        setTimeout(()=>{

            petal.remove();

        },6500);

    },350);

}
