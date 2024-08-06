const quizData = [
    {
        question: "1.What is the main gas found in the Earth's atmosphere?",
        choices: ["Carbon Dioxide", " Hydrogen", "Nitrogen", "Oxygen"],
        correct: 2
    },
    {
        question: "2.Who wrote the play 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1
    },
    {
        question: "3.What is the tallest mountain in the world?",
        choices: [" K2", "Mount Kilimanjaro", "Mount Everest", " Mount Fuji"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const quizQuestion = document.getElementById('quiz-question');
const choices = document.querySelectorAll('.choice');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    quizQuestion.innerText = currentQuizData.question;
    choices.forEach((choice, index) => {
        choice.innerText = currentQuizData.choices[index];
    });
    nextButton.style.display = 'none';
}

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        if (selectedAnswer == quizData[currentQuestion].correct) {
            selectedChoice.style.backgroundColor = 'green';
            score++;
        } else {
            selectedChoice.style.backgroundColor = 'red';
        }

        choices.forEach(choice => {
            choice.disabled = true;
        });

        nextButton.style.display = 'block';
    });
});

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        choices.forEach(choice => {
            choice.style.backgroundColor = '#007bff';
            choice.disabled = false;
        });
    } else {
        quizQuestion.innerText = `Quiz finished😊!Your score is ${score} out of ${quizData.length}.`;
        document.querySelector('.quiz-choices').style.display = 'none';
        nextButton.style.display = 'none';
    }
});

loadQuestion();
