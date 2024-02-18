// function play(){

//     // Removing home screen by adding hidden class in class list

//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // Presenting the playground section by removing the hidden class from the playground section

//     const playgroundScreen = document.getElementById('playground-screen');
//     playgroundScreen.classList.remove('hidden');

function continueGame(){

    const alphabet = getARandomAlpha()

    // console.log("Your random alphabet is: ",alphabet);

    // Set randomly generated alphabet in screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // Set background color
    setBackgroundColorById(alphabet)

    
}


function play(){

    hideElementById('home-screen');
    showElementById('playground-screen')

    continueGame();
}
