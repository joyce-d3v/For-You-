// =====================================
// ELEMENTS
// =====================================

const questionPage = document.getElementById("questionPage");

const loadingPage = document.getElementById("loadingPage");

const letterPage = document.getElementById("letterPage");

const heartPage = document.getElementById("heartPage");

const yesButtons = document.querySelectorAll(".yesBtn");

const continueBtn = document.getElementById("continueBtn");

const progressBar = document.querySelector(".progress-bar");

const loadingText = document.querySelector(".loading-text");

const heartContainer = document.getElementById("heartContainer");

const typedMessage = document.getElementById("typedMessage");

const finalMessage = document.querySelector(".final-message");

const sleepKitty = document.getElementById("sleepKitty");

const heartsContainer = document.querySelector(".hearts");

const sparklesContainer = document.querySelector(".sparkles");

const petalsContainer = document.querySelector(".petals");



// =====================================
// LOADING MESSAGES
// =====================================

const messages = [

    "Loading happiness... 💗",

    "Collecting hugs... 🥹",

    "Picking flowers... 🌸",

    "Writing a love letter... 💌",

    "Almost there... ❤️"

];



// =====================================
// FLOATING HEARTS
// =====================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        (12 + Math.random()*16) + "px";

    heart.style.animationDuration =
        (5 + Math.random()*4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,450);



// =====================================
// SPARKLES
// =====================================

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        Math.random()*100 + "vw";

    sparkle.style.top =
        Math.random()*100 + "vh";

    sparkle.style.animationDelay =
        Math.random()*2 + "s";

    sparklesContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2000);

}

setInterval(createSparkle,250);



// =====================================
// START EXPERIENCE
// =====================================

yesButtons.forEach(button=>{

    button.addEventListener("click",startExperience);

});



function startExperience(){
    
    alert("Button clicked!");

    questionPage.classList.add("fade-out");

    setTimeout(()=>{

        questionPage.classList.add("hidden");

        loadingPage.classList.remove("hidden");

        loadingPage.classList.add("fade-in");

        startLoading();

    },600);

}



// =====================================
// LOADING BAR
// =====================================

function startLoading(){

    let progress = 0;

    let message = 0;

    loadingText.textContent = messages[0];

    const loading = setInterval(()=>{

        progress += 2;

        progressBar.style.width =
            progress + "%";

        if(progress % 20 === 0 &&
           message < messages.length-1){

            message++;

            loadingText.textContent =
                messages[message];

        }

        if(progress >= 100){

            clearInterval(loading);

            setTimeout(showLetter,700);

        }

    },90);

}



// =====================================
// SHOW LETTER
// =====================================

function showLetter(){

    loadingPage.classList.add("hidden");

    letterPage.classList.remove("hidden");

    letterPage.classList.add("fade-in");

}



// =====================================
// CONTINUE BUTTON
// =====================================

continueBtn.addEventListener("click",()=>{

    letterPage.classList.add("fade-out");

    setTimeout(()=>{

        letterPage.classList.add("hidden");

        heartPage.classList.remove("hidden");

        heartPage.classList.add("fade-in");

        createLoveHeart();

    },600);

});

// =====================================
// CREATE "I LOVE YOU" HEART
// =====================================

function createLoveHeart(){

    heartContainer.innerHTML = "";

    const points = [];

    // Make heart smaller on phones
    const isMobile = window.innerWidth <= 600;

    const step = isMobile ? 0.12 : 0.08;

    const scale = isMobile ? 12 : 18;

    // Heart equation
    for(let t = 0; t < Math.PI * 2; t += step){

        const x = 16 * Math.pow(Math.sin(t),3);

        const y =
            13 * Math.cos(t)
            -5 * Math.cos(2*t)
            -2 * Math.cos(3*t)
            -Math.cos(4*t);

        points.push({

            x: x * scale,

            y: -y * scale

        });

    }

    // Spread words out a little more on phones
    const spacing = isMobile ? 1.35 : 1;

    points.forEach((point,index)=>{

        const word = document.createElement("div");

        word.className = "love-word";

        // Mostly words, a few hearts
        word.textContent =
            Math.random() > 0.2
            ? "I LOVE YOU"
            : "❤";

        // Random starting position
        word.style.left =
            Math.random()*window.innerWidth + "px";

        word.style.top =
            Math.random()*window.innerHeight + "px";

        word.style.opacity = "0";

        heartContainer.appendChild(word);

        setTimeout(()=>{

            word.style.opacity = "1";

            word.style.left =
                `calc(50% + ${point.x * spacing}px)`;

            word.style.top =
                `calc(45% + ${point.y * spacing}px)`;

        },index*45);

    });

    // Wait until heart finishes forming
    setTimeout(()=>{

        startHeartbeat();

    },points.length*45 + 1200);

}



// =====================================
// HEARTBEAT
// =====================================

function startHeartbeat(){

    const words = document.querySelectorAll(".love-word");

    let beat = false;

    setInterval(()=>{

        beat = !beat;

        words.forEach(word=>{

            word.style.transform = beat

                ? "scale(1.12)"

                : "scale(1)";

        });

    },800);

    // After a short pause...
    setTimeout(()=>{

        typeMessage();

    },2000);

}

// =====================================
// TYPEWRITER MESSAGE
// =====================================

function typeMessage(){

    finalMessage.classList.remove("hidden");

    const message =
`Happy Girlfriend's Day! ❤️`;

    let i = 0;

    typedMessage.innerHTML = "";

    const typing = setInterval(()=>{

        typedMessage.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(typing);

            setTimeout(()=>{

                showKitty();

                startPetals();

            },800);

        }

    },80);

}



// =====================================
// SHOW KITTY
// =====================================

function showKitty(){

    sleepKitty.classList.remove("hidden");

    sleepKitty.classList.add("show");

}



// =====================================
// FALLING PETALS
// =====================================

function startPetals(){

    setInterval(()=>{

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌸";

        petal.style.left =
            Math.random()*100 + "vw";

        petal.style.animationDuration =
            (5 + Math.random()*4) + "s";

        petal.style.fontSize =
            (18 + Math.random()*12) + "px";

        petalsContainer.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },9000);

    },350);

}



// =====================================
// OPTIONAL:
// HEART BURST WHEN MESSAGE APPEARS
// =====================================

function createBurst(){

    for(let i = 0; i < 18; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤";

        heart.style.position = "absolute";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.fontSize = "22px";

        heart.style.pointerEvents = "none";

        heart.style.transition = "1.2s ease";

        heart.style.opacity = "1";

        document.body.appendChild(heart);

        requestAnimationFrame(()=>{

            const angle = Math.random()*360;

            const distance = 120 + Math.random()*120;

            heart.style.transform =
            `translate(
                ${Math.cos(angle*Math.PI/180)*distance}px,
                ${Math.sin(angle*Math.PI/180)*distance}px
            )`;

            heart.style.opacity = "0";

        });

        setTimeout(()=>{

            heart.remove();

        },1200);

    }

}



// =====================================
// CALL HEART BURST
// =====================================

// Add this line inside typeMessage()
// just BEFORE showKitty();
//
// createBurst();



// =====================================
// DONE ❤️
// =====================================