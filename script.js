/*
document.addEventListener("DOMContentLoaded", function() {
    const animationDiv = document.getElementById("fireplace");
    let currentFrame = 1;
    let isAnimating = true;
    let interval;

    function animate() {
        if (isAnimating) {
            animationDiv.style.backgroundImage = `url(fire/${currentFrame}.png)`;
            currentFrame = (currentFrame % 6) + 1;
        } else {
            clearInterval(interval);
            animationDiv.style.backgroundImage = "url(fireout.png)";
        }
    }

    animate(); // Initial animation


    interval = setInterval(animate, 150);
});

*/

document.addEventListener("DOMContentLoaded", function() {
    animationStuff();

    welcomeTab = document.getElementById("WelcomeTab");
    videoTab = document.getElementById("VideoTab");
    raiderTab = document.getElementById("RaiderTab");
    terminalTab = document.getElementById("TerminalTab");
    votingTab = document.getElementById("VotingTab");

    welcomeTab.addEventListener("click", function() {
        setContent("WelcomeTab");
    });
    videoTab.addEventListener("click", function() {
        setContent("VideoTab");
    });
    raiderTab.addEventListener("click", function() {
        setContent("RaiderTab");
    });
    terminalTab.addEventListener("click", function() {
        setContent("TerminalTab");
    });
    votingTab.addEventListener("click", function() {
        setContent("VotingTab");
    });
});

function setContent(tabId) {
    switch(tabId) {
        case "WelcomeTab":
            document.getElementById("WelcomeContent").style.display = "block";
            document.getElementById("VideoContent").style.display = "none";
            document.getElementById("RaiderContent").style.display = "none";
            document.getElementById("TerminalContent").style.display = "none";
            document.getElementById("VotingContent").style.display = "none";    
            break;
        case "VideoTab":
            document.getElementById("WelcomeContent").style.display = "none";
            document.getElementById("VideoContent").style.display = "block";
            document.getElementById("RaiderContent").style.display = "none";
            document.getElementById("TerminalContent").style.display = "none";
            document.getElementById("VotingContent").style.display = "none"; 
            break;
        case "RaiderTab":
            document.getElementById("WelcomeContent").style.display = "none";
            document.getElementById("VideoContent").style.display = "none";
            document.getElementById("RaiderContent").style.display = "block";
            document.getElementById("TerminalContent").style.display = "none";
            document.getElementById("VotingContent").style.display = "none"; 
            break;
        case "TerminalTab":
            document.getElementById("WelcomeContent").style.display = "none";
            document.getElementById("VideoContent").style.display = "none";
            document.getElementById("RaiderContent").style.display = "none";
            document.getElementById("TerminalContent").style.display = "block";
            document.getElementById("VotingContent").style.display = "none"; 
            break;
        case "VotingTab":
            document.getElementById("WelcomeContent").style.display = "none";
            document.getElementById("VideoContent").style.display = "none";
            document.getElementById("RaiderContent").style.display = "none";
            document.getElementById("TerminalContent").style.display = "none";
            document.getElementById("VotingContent").style.display = "block"; 
            break;
    
    }
}


function animationStuff(){ 
       
    // Get the WelcomeTab div element
    var welcomeTab = document.getElementById("WelcomeTab");

    // Get the dice-container element
    var diceContainer = document.querySelector(".dice-container");

    // Get the Background element
    var background = document.getElementById("Background");

    // Get the cornerImage element
    var cornerImage = document.getElementById("cornerImage");

    // Add click event listener to WelcomeTab
    diceContainer.addEventListener("click", function() {
        disableMouseClicks(800);
           
        // Set display property of dice-container to none
        // Set display property of Background to block
        background.style.display = "block";

        // Animate the display property of Background
        setTimeout(function() {
            background.classList.add("enlarge-animation");

            // Hide diceContainer after animation ends
            setTimeout(function() {
                diceContainer.style.display = "none";
            }, 500); // Assuming the animation duration is 0.5 seconds (500 milliseconds)
        }, 10);
    });

    // Add click event listener to cornerImage
    cornerImage.addEventListener("click", function() {
        disableMouseClicks(800);
        resumeMusic();

        // Remove the original animation class
        background.classList.remove("enlarge-animation");
        
        // Add the reverse animation class
        background.classList.add("shrink-animation");

        // Hide Background after animation ends
        setTimeout(function() {
            background.style.display = "none";
            background.classList.remove("shrink-animation");
            background.classList.add("enlarge-animation");
        }, 500); // Assuming the animation duration is 0.5 seconds (500 milliseconds)

        // Set display of dice-container to block
        diceContainer.style.display = "flex";
    });
}


function disableMouseClicks(duration) {
    // Disable mouse clicks
    document.addEventListener("click", blockClicks, true);
    document.addEventListener("mousedown", blockClicks, true);
    document.addEventListener("mouseup", blockClicks, true);

    // Restore mouse clicks after the specified duration
    setTimeout(function() {
        document.removeEventListener("click", blockClicks, true);
        document.removeEventListener("mousedown", blockClicks, true);
        document.removeEventListener("mouseup", blockClicks, true);
    }, duration);

    // Function to prevent default action of mouse events
    function blockClicks(event) {
        event.stopPropagation();
        event.preventDefault();
    }
}

function openSite(){
        window.location.href = "https://trcustoms.org/levels/3336";
}
function openTerminal(){
    window.location.href = "terminal.html";
}

//DomContentLoaded
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("TImage").addEventListener("click", function(){
        pauseMusic();
    });
});





document.addEventListener("DOMContentLoaded", function() {
    // Define video data with days and corresponding links
    const videoData = [
        { day: 1, link: "https://www.youtube.com/embed/2c5EvrB1Wfo?si=OAZs8DOJhdwti8as" },
        { day: 2, link: "https://www.youtube.com/embed/4v_tIJHPbz8?si=bse04P6y_cqmYQVP" },
        { day: 3, link: "https://www.youtube.com/embed/sFQ8bG_GqfM?si=ipIcC6nbOFvAM2yA" },
        { day: 4, link: "https://www.youtube.com/embed/YTV-AFRsJdk?si=e3SXNhSGd_LEFIm_" },
        { day: 5, link: "https://www.youtube.com/embed/cwbWfq3rTBk?si=UWvWldamxK-opDTF" },
        { day: 6, link: "https://www.youtube.com/embed/IGRYM9U-IEk?si=n0WT3zKnPF8q-Tf4" },
        { day: 7, link: "https://www.youtube.com/embed/G4lGqj9vRPc?si=CdPJKgSy5pr1nDk9" },
        { day: 8, link: "https://www.youtube.com/embed/SxrHXsTONqA?si=568crIuNb2d5sZ0X" },
        { day: 9, link: "https://www.youtube.com/embed/LtiMNmFs8d0?si=HKzur4GZ5GP7EuJ5" },
        { day: 10, link: "https://www.youtube.com/embed/48IOG2fz0WA?si=gWatlLWxGDLZXD88" },
        { day: 11, link: "https://www.youtube.com/embed/weORZtBDpGE?si=b71CxU0faFXsEbIc" },
        { day: 12, link: "https://www.youtube.com/embed/uImq2UJor4o?si=w-iGdP-s6Haklura" },
        { day: 13, link: "https://www.youtube.com/embed/50LvhtVHvTE?si=Ifi-Zc08L-0suPja" },
        { day: 14, link: "https://www.youtube.com/embed/jKaobECPC-8?si=TrIag-FXBhhksQ68" },
        { day: 15, link: "https://www.youtube.com/embed/gBOVTkKQaoM?si=qFShdsk1C9ld2Izj" },
        { day: 16, link: "https://www.youtube.com/embed/IexH-6Qj6tg?si=eAOrB9t7e2bJt0cR" },
        { day: 17, link: "https://www.youtube.com/embed/WqXUxs0S5V4?si=Vqfj9ZpbgFEA4fcA" },
        { day: 18, link: "https://www.youtube.com/embed/jEST5pBp078?si=kTrwyH6IRe8qVrNy" },
        { day: 19, link: "https://www.youtube.com/embed/NGbuZ-65Qz8?si=mTFqX5aCeTgC07So" },
        { day: 20, link: "https://www.youtube.com/embed/O-f3JNei-ho?si=j_HmCvCCXP18fcv1" },
        { day: 21, link: "https://www.youtube.com/embed/LvP7P_Igm10?si=woBAa8Qp4awqwUPx" },
        { day: 22, link: "https://www.youtube.com/embed/2s2s_CPrlQs?si=cvkcgG1zr1dNuFkq" },
        { day: 23, link: "https://www.youtube.com/embed/Km3_bsX_Xvo?si=2JTcEY6My5MKMrWU" },
        { day: 24, link: "https://www.youtube.com/embed/8099TGF0CcY?si=-yDymEp09tfeqf0R" },
        { day: 25, link: "https://www.youtube.com/embed/zmGZqrjrsBo?si=KZJI2jBnGJEPDiRs" },
        { day: 26, link: "https://www.youtube.com/embed/kz5Bkg2xs24?si=K4Bd8m8tgerqqDWo" },
        { day: 27, link: "https://www.youtube.com/embed/lwqpmKj1cuI?si=Sz6iVmrLhOCudGyc" },
        { day: 28, link: "https://www.youtube.com/embed/2ugeLG7kb8U?si=VF99EoAdtc0bI7E7" },
        { day: 29, link: "https://www.youtube.com/embed/4EN0RS40tmk?si=lej7HJnraM65z9Js" },
        { day: 30, link: "https://www.youtube.com/embed/AY1VnIKX3vQ?si=gsgz0vHcp19l8tSj" },
        { day: 31, link: "https://www.youtube.com/embed/TgywWaIs7rs?si=3v9pX4pSah2UWhXa" },
    ];

    // Get current day of the month
    const currentDay = new Date().getDate();

    // Find the video link for the current day
    let selectedVideoLink = "";
    for (let i = 0; i < videoData.length; i++) {
        if (videoData[i].day === currentDay) {
            selectedVideoLink = videoData[i].link;
            break;
        }
    }

    // Update the iframe source with the selected video link
    const videoFrame = document.getElementById("videoFrame");
    if (selectedVideoLink) {
        videoFrame.src = selectedVideoLink;
    } else {
        // Handle case when no video is found for the current day
        videoFrame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=OgCgCNEk70kJLyTV"; // Default video link
    }
});

document.addEventListener("DOMContentLoaded", function(event) {
    var snowfallContainer = document.getElementById('snowfall');
    
    // Create and append snowflakes
    for (var i = 0; i < 200; i++) {
      var snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * 200 - 50 + 'vw'; // Random horizontal position with wider emitter
      snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
      snowflake.style.animationDelay = Math.random() * 5 + 's';
      snowfallContainer.appendChild(snowflake);
    }
  });
document.addEventListener("DOMContentLoaded", function(){
    var time = new Date().getHours();
    const overlay = document.getElementById("overlay");
    if (time==22 || time==23 || time==0 || time==1 || time==2 || time==3 || time==4 || time==5 || time==6) {
        overlay.style.display = "block";
        
        var snowstormAudio = new Audio("Music/snowstorm.mp3");
        snowstormAudio.volume = 0.1;
        snowstormAudio.loop = true;
        snowstormAudio.play();
        playMusic("Music/night.mp3", 40);
    } else {
        overlay.style.display = "none";
        playMusic("Music/snowfall.ogg", 70);
        var snowstormAudio = new Audio("Music/snowstorm.mp3");
        snowstormAudio.volume = 0.2;
        snowstormAudio.loop = true;
        snowstormAudio.play();
    }
});

function setNight(){
    var time = new Date().getHours();
    time=23;
    const overlay = document.getElementById("overlay");
    if (time==22 || time==23 || time==0 || time==1 || time==2 || time==3 || time==4 || time==5 || time==6) {
        overlay.style.display = "block";
        
        var snowstormAudio = new Audio("Music/snowstorm.mp3");
        snowstormAudio.volume = 0.1;
        snowstormAudio.loop = true;
        snowstormAudio.play();
        playMusic("Music/night.mp3", 40);
    } else {
        overlay.style.display = "none";
        playMusic("Music/snowfall.ogg", 70);
        var snowstormAudio = new Audio("Music/snowstorm.mp3");
        snowstormAudio.volume = 0.2;
        snowstormAudio.loop = true;
        snowstormAudio.play();
    }
    
}

//Create a public variable to store the audio name
var music = new Audio();

function playMusic(audioName, volume) {
    music.src = audioName;
    music.volume = volume / 100;
    //loop
    music.loop = true;
    music.play();
}

function pauseMusic() {
    music.pause();
}

function resumeMusic() {
    music.play();
}

var hidden = 0;
//detect pressing h
document.addEventListener("keydown", function(event) {
    var diceContainer = document.querySelector(".dice-container");
    if (event.key === "h") {
        if (hidden == 0) {
            diceContainer.style.display = "none";
            hidden = 1;
        } else {
            diceContainer.style.display = "flex";
            hidden = 0;
        }
    }
});

setInterval(function() {
    var tip = document.getElementById("hideTip");
    tip.style.display = "none";
}, 3000);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("VoteButton").addEventListener("click", function(){
        var tip = document.getElementById("VoteButton");
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScPAAhIn7dEnVJh4zQNi_wvZIcjgu4meP3yQmP8RLSbSN0y9g/viewform?usp=sf_link";
    });
});