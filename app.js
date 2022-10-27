const responsesArray = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

const submitBtn = document.getElementById('submit');
const answer = document.getElementById('renderAnswer');
const resetBtn = document.getElementById('reset');
const promptEl = document.getElementById('prompt');
const replyEl = document.getElementById('reply');
const questionEl = document.getElementById('question-bar');

function toggleSections() {
    promptEl.classList.toggle('hide');
    replyEl.classList.toggle('hide');
}

submitBtn.addEventListener('click', () => {
    toggleSections();
    const randomNum = Math.floor(Math.random() * responsesArray.length);
    const randomAnswer = responsesArray[randomNum];
    answer.textContent = randomAnswer;
    questionEl.value = '';
});

resetBtn.addEventListener('click', toggleSections);
