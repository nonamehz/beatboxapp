/* Variables */
const buttons = document.querySelectorAll('button');

let beats = {
    'a': './assets/Piano Chord 331.mp3',
    's': './assets/Piano Chord 209.mp3',
    'd': './assets/Piano Chord 208.mp3',
    'f': './assets/Drum Sticks Hit 3.mp3',
    'g': './assets/Drum Snare Roll.mp3',
    'h': './assets/PREL Musical 57.mp3',
    'j': './assets/Cymbal Suspended 2.mp3',
    'k': './assets/Musical Compos 33.mp3',
    'l': './assets/Musical Orches 4.mp3'
}

/* Eventos */
document.addEventListener('keydown', (e) => teclaBoton(e));
clickBoton();

/* Funciones */
const teclaBoton = ({ key }) => {
    playBeat(key);
}
// function teclaBoton({ key }) {
//     eventoBoton(key)
// }

function clickBoton() {
    evaluarBotones(buttons)
}



function evaluarBotones(btnArr) {
    btnArr.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.attributes[2].value;
            playBeat(key);
        });

    });
}

// function eventoBoton(key) {
//     switch (key) {
//         case 'a':
//             playBeat(key);
//             break;
//         case 's':
//             playBeat(key);
//             break;
//         case 'd':
//             playBeat(key);
//             break;
//         case 'f':
//             playBeat(key);
//             break;
//         case 'g':
//             playBeat(key);
//             break;
//         case 'h':
//             playBeat(key);
//             break;
//         case 'j':
//             playBeat(key);
//             break;
//         case 'k':
//             playBeat(key);
//             break;
//         case 'l':
//             playBeat(key);
//             break;
//         default:
//             console.log('Esta tecla no está en el instrumento xd');
//             break;
//     }
// }

function playBeat(key) {
    let audioSrc = beats[key];
    let audio = new Audio(audioSrc);
    audio.currentSrc = 0;
    audio.play();
}