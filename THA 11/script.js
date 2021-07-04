const quiz = [
    {
        ques:"Q1. Which among the following is not a correct pair?",
        a:"Ellora Caves – Rastrakuta Rulers",
        b:"Mahabalipuram - Pallava Rulers",
        c:"Khajuraho – Chandellas",
        d:"Elephanta Caves – Maurya Era",
        ans:"opt4"
    },

    {
        ques:"Q2. India's permanent research station Dakshin Gangotri is situated in:",
        a:"Great Himalayas",
        b:"Indian Ocean",
        c:"Antarctica",
        d:"Arabian Sea",
        ans:"opt3"
    },
    
    {
        ques:"Q3. Who among the following can remove the governor of a state from office?",
        a:"Legislative Assembly",
        b:"Parliament",
        c:"President",
        d:"Supreme Court",
        ans:"opt3"
    },
    
    {
        ques:"Q4. Which of the following books has been written by Vikram Seth?",
        a:"My God Died Young",
        b:"Islamic Bomb",
        c:"Look Back in Anger",
        d:"A Suitable Boy",
        ans:"opt4"
    },
    {
        ques:"Q5. Mudumalai Sanctuary is situated in:",
        a:"Arunachal Pradesh",
        b:"Tamil Nadu",
        c:"West Bengal",
        d:"Kerela",
        ans:"opt2"
    }
];

const question = document.querySelector('.ques');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const submit = document.querySelector('#submit');

const h2 = document.querySelector('h2')
const li = document.querySelector('ul')
const answers = document.querySelectorAll('.ans');
const showScore = document.querySelector('#showScore')

let Score = 0;
let quesCount = 0;

const loadQuestion = () => {
    const questionList = quiz[quesCount];
    question.innerText =  questionList.ques;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAns) => {
        if(curAns.checked){
            answer = curAns.id;
        }
    });
    return answer;
};

const deSelectAll = () =>{
    answers.forEach((curAns) => curAns.checked = false);
}

submit.addEventListener("click", () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);
    if(checkAnswer === quiz[quesCount].ans){
        Score++;
    };
    quesCount++;

    deSelectAll();
    if(quesCount < quiz.length){
        loadQuestion();
    }
    else{
        h2.style.display = "none";
        li.style.display = "none";
        submit.style.display = "none";
        showScore.innerHTML = `
        <h3>You scored ${Score}/${quiz.length}! </h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});     