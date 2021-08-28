const msg = document.querySelector('.msg');
const Guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords = ['python', 'java', 'php', 'cpp', 'javascript', 'html', 'css', 'c#', 'reactjs', 'angular', 'nodejs',
    'swift', 'sql', 'android'];
const createNewWord = () => {
    let rName = Math.floor(Math.random() * sWords.length);
    // console.log(rName);
    let newTempWord = sWords[rName];

    return newTempWord;
}
const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];

        let j = Math.floor(Math.random() * (i + 1));
        // console.log(i);
        // console.log(j);
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        Guess.classList.toggle('hidden');

        newWords = createNewWord();
        randWords = scrambleWords(newWords.split("")).join("");

        msg.innerHTML = `Guess the word : ${randWords}`;
    } else {
        let tempWord = Guess.value;
        if (tempWord === newWords) {

            play = false;
            msg.innerHTML = `Excellent It's correct 😄 👍. it is ${newWords}`
            btn.innerHTML = "Start Again"
            Guess.classList.toggle('hidden');
            Guess.value = "";
        } else {
            console.log('incorrect');
            msg.innerHTML = `Sorry It's not correct :-1:. please try again ${randWords}`
        }
    }

})