function openTerminal(){
    sond = new Audio('Sounds/jammer.ogg');
    sond.play();
    setTimeout(() => {
        window.location.href = "terminal.html";
    }, 5000);
}

function toggleGallery() {
    var galleryOverlay = document.getElementById('gallery-overlay');
    var galleryButton = document.getElementById('gallery-button');

    if (galleryOverlay.style.display === 'none' || galleryOverlay.style.display === '') {
        galleryOverlay.style.display = 'flex';
        galleryButton.style.display = 'none';
    } else {
        galleryOverlay.style.display = 'none';
        galleryButton.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Get all radio buttons
    const radioButtons = document.querySelectorAll('.btn-check');

    // Attach event listener to each radio button
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            // Get the corresponding content element
            const contentId = this.id.replace('btnradio', '');
            const contentElement = document.getElementById(contentId + '-content');

            // Hide all content elements
            document.querySelectorAll('[id$="-content"]').forEach(function (content) {
                content.style.display = 'none';
            });

            // Show the selected content element
            contentElement.style.display = 'block';
        });
    });
});

window.onload = function () {
    // Get the Welcome radio button
    const welcomeRadioButton = document.getElementById('welcome');

    // Trigger the change event on the Welcome radio button
    welcomeRadioButton.checked = true;
    welcomeRadioButton.dispatchEvent(new Event('change'));
};  

document.addEventListener('DOMContentLoaded', function () {
    const martlet = document.getElementById('martlet');
    const originalTop = parseFloat(getComputedStyle(martlet).top);

    const imageArray = [];
    for (let i = 1; i <= 12; i++) {
        imageArray.push(`Images/Martlets/image${i}.png`);
    }

    let isClicked = false;

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        return imageArray[randomIndex];
    }

    martlet.addEventListener('click', function () {
        if (!isClicked) {
            isClicked = true;
    
            const martletImg = document.getElementById('martletImg');
            martletImg.style.cursor = 'default';
    
            const img = document.getElementById('martletImg');
            img.src = getRandomImage();
    
            const targetTop = originalTop - 190; // Adjust this value as needed
            const appearingDuration = 250; // 0.5 seconds for appearing
            const fallingDuration = 1000; // 1 second for falling back down
            const stopDuration = 1500; // 1 second stop mid-animation
    
            function animatePosition(startTime, updateFunction, duration) {
                function animate(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
    
                    updateFunction(progress);
    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else if (progress >= 1 && elapsedTime < stopDuration) {
                        // Stop mid-animation
                        requestAnimationFrame(animate);
                    } else {
                        isClicked = false;
                        martletImg.style.cursor = 'pointer';
                    }
                }
    
                requestAnimationFrame(animate);
            }
    
            function updatePosition(progress) {
                const newTop = originalTop + (targetTop - originalTop) * progress;
                martlet.style.top = `${newTop}px`;
            }
    
            function reversePosition(progress) {
                const reverseTop = targetTop + (originalTop - targetTop) * progress;
                martlet.style.top = `${reverseTop}px`;
            }
    
            animatePosition(performance.now(), updatePosition, appearingDuration);
    
            setTimeout(() => {
                animatePosition(performance.now(), reversePosition, fallingDuration);
            }, appearingDuration + stopDuration);
        }
    });
    
});

