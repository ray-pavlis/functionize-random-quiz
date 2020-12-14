// Random Quiz

// Event Listener (Mark Quiz)
document.getElementById('mark-quiz').addEventListener('click', markQuiz);

// Event Function
function markQuiz() {
    // Initialize Score
    let score = 0;

    // Mark Questions
    score += markQuestion(1, "canada");
    score += markQuestion(2, "cardinal");
    score += markQuestion(3, "tai lung");
    score += markQuestion(4, "pickleball");

    // Display Quiz Results
    document.getElementById('quiz-score').innerHTML = score;
    document.getElementById('quiz-percent').innerHTML = Math.round((score / 4) * 100);


}

// DEFINE & INVOKE - LOCAL & GLOBAL VARIABLES - ORGANIZED - EFFICIENCY
function markQuestion(qNum, correctAnswer) {
    let userAnswer = document.getElementById('answer' + qNum).value;
    userAnswer = userAnswer.toLowerCase();

    let resultEl = document.getElementById('result' + qNum);
    if (userAnswer == correctAnswer) {
        resultEl.innerHTML = 'Correct';
        resultEl.style.color = 'green';
        return 1;
    } else {
        resultEl.innerHTML = 'Incorrect';
        resultEl.style.color = 'red';
        return 0;
    }
}