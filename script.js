



document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    terminal.style.display = 'none';
    lightsond = new Audio('/Sounds/lightson.ogg');
    lightsond.play();
})

            
            //wait 1000ms and after that wait 3000ms
            setTimeout(() => {
                pcsound = new Audio('/Sounds/TerminalOn.mp3');
                pcsound.play();
                setTimeout(() => {
                    terminal.style.display = 'block';
                    popaudio = new Audio('/Sounds/EnterTerminal.ogg');
                    popaudio.play();
                }, 6000);
            }, 3000);

  