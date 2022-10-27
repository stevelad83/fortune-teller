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

submitBtn.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * responsesArray.length);
    const randomAnswer = responsesArray[randomNum];
    console.log(randomAnswer);
});
