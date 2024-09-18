



document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    terminal.style.display = 'none';
    lightsond = new Audio('/Portfolio/Terminal/Sounds/TerminalSounds/lightson.ogg');
    lightsond.play();
})

            
            //wait 1000ms and after that wait 3000ms
            setTimeout(() => {
                pcsound = new Audio('/Portfolio/Terminal/Sounds/TerminalSounds/TerminalOn.mp3');
                pcsound.play();
                setTimeout(() => {
                    terminal.style.display = 'block';
                    popaudio = new Audio('/Portfolio/Terminal/Sounds/TerminalSounds/EnterTerminal.ogg');
                    popaudio.play();
                }, 6000);
            }, 3000);

  