document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    const answers = {
        q1: 'b',
        q2: 'a',
        q3: 'b',
        q4: 'a',
        q5: 'd',
        q6: 'b',
        q7: 'c',
        q8: 'c',
        q9: 'b',
        q10: 'b',
        q11: 'b',
        q12: 'b'
    };
    for (const [question, correctAnswer] of Object.entries(answers)) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswer) {
            score++;
        }
    }
    alert('Your score is: ' + score + '/' + Object.keys(answers).length);
});
