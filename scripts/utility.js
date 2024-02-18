function hideElementById(elementId){

    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden');

}

function showElementById(elementId){

    const playGround = document.getElementById(elementId);
    playGround.classList.remove('hidden');
}

function setBackgroundColorById(elementId){

    const element = document.getElementById(elementId);
    element.classList.add('bg-yellow-200');

}


function getARandomAlpha(){

    // get or create alphabet array
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = alphaString.split('');

    // create random number
    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);

    const randAlphabet = alpha[index];

    // console.log(randAlphabet);

    return randAlphabet



}













// function continueGame(){


// }