

document.addEventListener('keydown', playRandomSound);
function playRandomSound(event) {
  // Define the number of keys
  const numberOfKeys = 8;

  // Generate a random number between 1 and numberOfKeys
  const randomKeyNumber = Math.floor(Math.random() * numberOfKeys) + 1;

  // Construct the filename for the random sound
  const randomSoundFile = `/Sounds/TKeys/Key${randomKeyNumber}.ogg`;

  // Create an audio element
  const clickaudio = new Audio(randomSoundFile);

  // Play the random sound
  clickaudio.play();
}

//! You can edit after this point



document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const typingArrow = document.getElementById('typing-arrow');
  const popupContainer = document.getElementById('popup-container');
  const popupImage = document.getElementById('popup-image');
  let isOpen = false;
  let linecount = 0;
  executeCommand('Welcome!');

  // Set focus to input on any key press
  document.addEventListener('keydown', function(event) {
      if (!event.metaKey) {
          input.focus();
      }
      playRandomSound(event);
  });



  // Capture input without showing the input box
  input.addEventListener('input', function() {
      typingArrow.textContent = '> ' + this.value;
  });

  input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          executeCommand(this.value);
          this.value = ''; // Clear input after command execution
          typingArrow.textContent = '>'; // Reset typing arrow
        
      }
  });

  function executeCommand(command) {
    const commands = {
        'help': {
            execute: () => 'Available commands:<br> ' + Object.keys(commands)
                .filter(cmd => !commands[cmd].hidden) // Filter out hidden commands
                .join(',<br>'),
            hidden: false // 'help' should be visible
        },
        'shddn': {
            execute: () => 'Available commands: ' + Object.keys(commands)
                .filter(cmd => commands[cmd].hidden) // Filter out hidden commands
                .join(', '),
            hidden: true // 'help' should be visible
        },
        'clear': {
            execute: () => {output.innerHTML = '',
            linecount = 0;
        },
            hidden: false
        
        },
        'simp': {
            execute: () => {
            // Specify the image URL or use a placeholder
            popupImage.src = 'Images/Terminal/Simp.gif'; // Change this URL
            popupContainer.style.display = 'flex'; // Show the popup
            isOpen = true;
            return ''; // No need to return text output for this command
            },
            hidden: true
        },
        'martlet': {
            execute: () => {
            // Specify the image URL or use a placeholder
            popupImage.src = 'Images/Terminal/Martlet.gif'; // Change this URL
            popupContainer.style.display = 'flex'; // Show the popup
            isOpen = true;
            return ''; // No need to return text output for this command
            },
            hidden: true
        },
        'credits': {
                execute: () => {
                    return 'Website created by Mateusz aka Boleklolo<br><br>' +
                    'Undertale Yellow and its characters by <a href="https://gamejolt.com/@TeamUTY">@TeamUTY</a><br><br>' +
                    'Coloured Martlet sprites by <a href="https://twitter.com/couckee">@couckee</a><br><br>' +
                    'Terminal model by <a href="https://twitter.com/ZeekerssRBLX">@ZeekerssRBLX</a><br><br>' +
                    'Thanks to r/MartletAppeciation community<br><br>' +
                    'Hi andrix<br><br>' +
                    'PC sound by Eleven';
                    
                },
                hidden: false
            },
        'Welcome!': {
            execute: () => {
                return 'Welcome to Vorlox(c) Terminal<br>' + 'All commands are in lowercase letters.'
            },
            hidden: true
        },
        '9 Reasons': {
            execute: () => {
                window.location.href = "/Old/9Reasons.html";
            },
            hidden: true
        },
        'creeper': {
            execute: () => {
                window.location.href = "/Videos/creeper.mp4";
            },
            hidden: true
        },
        'exit': {
            execute: () => {
                window.location.href = "/index.html";
            },
            hidden: false
        },
        'pukla': {
            execute: () => {
            popupImage.src = 'Images/Terminal/pukla.gif'; 
            popupContainer.style.display = 'flex'; 
            isOpen = true;
            return ''; 
            },
            hidden: true
        },
        'dragon': {
            execute: () => {
            popupImage.src = 'Images/Terminal/drugon.gif'; 
            popupContainer.style.display = 'flex'; 
            isOpen = true;
            return ''; 
            },
            hidden: true
        },
        'makison': {
            execute: () => {
            window.location.href = 'Old/makison.html'; 
            },
            hidden: true
        },
        'thumbsup': {
            execute: () => {
            popupImage.src = 'Old/2.jpg';
            popupContainer.style.display = 'flex'; 
            isOpen = true;
            return ''; 
            },
            hidden: true   
        },
        'bruno': {
            execute: () => {
                audio = new Audio('Sounds/Buno.mp3');
                audio.play();
            },
            hidden: true
        },
        'audio stop': {
            execute: () => {
                audio.pause();
            },
            hidden: false
        },
        'nissany': {
            execute: () => {
                popupImage.src = 'Images/Terminal/Nissany.png'; 
                popupContainer.style.display = 'flex'; 
                isOpen = true;
                return ''; 
            },
            hidden: true
        },
        'ale seks': {
            execute: () => {
                popupImage.src = 'Images/Terminal/AleSeks.png'; 
                popupContainer.style.display = 'flex'; 
                isOpen = true;
                return ''; 
            },
            hidden: true
        },
        'annananja': {
            execute: () => {
                window.location.href = "/Videos/annanaja.mp4";
            },
            hidden: true
        },
        'dupa': {
            execute: () => {
                window.location.href = "/Videos/dupa.mp4";
            },
            hidden: true
        },
        'quote makison': {
            execute: () => {
                return 'Hello World!';
            },
            hidden: true
        },
        'quote hogrida': {
            execute: () => {
                return 'HOOOG RIDAAAAA';
            },
            hidden: true
        },
        'quote franciszek': {
            execute: () => {
                return 'wale konia do anime dziewczynki<br>jebac ukraincow';
            },
            hidden: true
        },
        'quote turos': {
            execute: () => {
                return 'mozecie mi ojebac gale';
            },
            hidden: true
        },
        'quote dragon': {
            execute: () => {
                return 'ready to destroy your bussy';
            },
            hidden: true
        },
        'quote dst': {
            execute: () => {
                return 'Theyre gonna destroy my bussy if I<br>bring my algebra skills';
            },
            hidden: true
        },
        'quote cloudee': {
            execute: () => {
                return 'Nah other women that arent my GF are stinky<br>men on the other hand...';
            },
            hidden: true
        },
        'quote navy': {
            execute: () => {
                return 'dst likes watching you both';
            },
            hidden: true
        },
        'quote guavabi': {
            execute: () => {
                return 'GGEZ just absolutely destroyed some kids<br>with my pair of balls';
            },
            hidden: true
        },
        'quote yud': {
            execute: () => {
                return '*uwu pounces on you* will you marry me?';
            },
            hidden: true
        },
        'quote kubus': {
            execute: () => {
                return 'jestem gejem i jestem czarny';
            },
            hidden: true
        },
        'quote barbobe': {
            execute: () => {
                return 'I am grooming my girlfriens<br>younger brothers';
            },
            hidden: true
        },

        'quote lordzix': {
            execute: () => {
                return 'jebac czarnych';
            },
            hidden: true
        },
        'domino spi': {
            execute: () => {
                window.location.href = "/Videos/dominosspi.mp4";
            },
            hidden: true
        },
        'administrator': {
            execute: () => {
                popupImage.src = 'Images/Terminal/Szostkek.png'; 
                popupContainer.style.display = 'flex'; 
                isOpen = true;
                return ''; 
            },
            hidden: true
        },
        'ufnal': {
            execute: () => {
                window.location.href = "/Videos/ufnalus.mp4";
            },
            hidden: true
        },
        'montagne': {
            execute: () => {
                popupImage.src = 'Images/Terminal/Montagne.png'; 
                popupContainer.style.display = 'flex'; 
                isOpen = true;
                return ''; 
            },
            hidden: true
        },
        'obarczanie': {
            execute: () => {
                popupImage.src = 'Images/Terminal/Kurwa.png'; 
                popupContainer.style.display = 'flex'; 
                isOpen = true;
                return ''; 
            },
            hidden: true
        },
        'dariusz': {
            execute: () => {
                popupImage.src = 'Images/Terminal/dariusz.gif'; 
                popupContainer.style.display = 'flex'; 
                isOpen = true;
                return ''; 
            },
            hidden: true

        },
        'hack': {
            execute: () => {
                window.location.href = 'atlastoby/website.html'; 
            },
            hidden: false

        },
        'murzynek': {
            execute: () => {
                window.location.href = "/Videos/murzynek.mp4";
            },
            hidden: true
        }
        
        
 
    };


    if (commands[command]) {
        const result = commands[command].execute();
        output.innerHTML += `<div>> ${command}</div>`;
        if (result !== undefined) {
            output.innerHTML += `<div>${result}</div>`;
        }
    } else {
        output.innerHTML += `<div>> ${command}</div>`;
        output.innerHTML += `<div>Command not found</div>`;
        typoerror = new Audio('/Sounds/TerminalSounds/TerminalTypoError.ogg');
        typoerror.play();
    }
        linecount++;
    }

      // Event listener to hide the popup on Enter key press
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popupContainer.style.display === 'flex') {
            popupContainer.style.display = 'none'; // Hide the popup
            isOpen = false;
        }
        if(linecount == 10){
          output.innerHTML = '';
          linecount = 0;
        }
    });

    document.addEventListener('keydown', function(event) {
        if (isOpen) {
            if (event.key !== 'Escape') {
                event.preventDefault(); // Halt all keys except for Escape
            } else {
                // Handle Escape key action here
                console.log('Escape key pressed.');
                isOpen = false; // Optionally close or change state
            }
        }
    });
});

