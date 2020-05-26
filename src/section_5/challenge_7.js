////////////////////////////
// CODING CHALLENGE
/*
--- Let's build a fun quiz game in the console! ---
    1. Build a function constructor called Question to describe a question. A question should include:
        a) question itself
        b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
        c) correct answer (I would use a number for this)
    2. Create a couple of questions using the constructor
    3. Store them all inside an array
    4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
    5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
    6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
    7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// 7. Suppose this code would be a plugin for other programmers to use in their code.
// So make sure that all your code is private and doesn't interfere with the other programmers code
// (Hint: we learned a special technique to do exactly that).
(function() {
    // 1. Function constructor
    function Question(question, answer, correctAnswer) {
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }
    
    // 2. Create a couple of questions using the constructor
    const q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    const q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    const q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
    // 3. Store them all inside an array
    const arrayQuestions = [q1, q2, q3];
    
    // 4. Select one random question and log it on the console, 
    // together with the possible answers (each question should have a number) 
    // (Hint: write a method for the Question objects for this task).
    // Prototype
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        this.answer.forEach((answer, index) => {
            console.log(`${index}. ${answer}`);
        });
    }
    
    let randomQuestion = Math.floor(Math.random() * arrayQuestions.length);
    let question = arrayQuestions[randomQuestion];
    question.displayQuestion();
    
    // 5. Use the 'prompt' function to ask the user for the correct answer. 
    // The user should input the number of the correct answer such as you displayed it on Task 4.
    let userAnswer = parseInt(prompt('Please select the correct answer.'));
    
    // 6. Check if the answer is correct and print to the console whether the answer is correct or not
    // (Hint: write another method for this).
    Question.prototype.checkAnswer = function(userAnswer) {
        console.log(this.correctAnswer === userAnswer ? 'Correct answer!' : 'Wrong answer. Try again!');
    }
    question.checkAnswer(userAnswer);
    
})();


