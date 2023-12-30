
// Created a common array for the questions , options and the correct answer


quizdata = [
    {
        question: "1.What is the capital of Canada.?",
        options: ["Ottawa", "Toronto", "Oshawa", "Halifax"],
        correct: "Ottawa",
    },
    {
        question: "2.What is the capital of India.?",
        options: ["Delhi", "Mumbai", "Ahmedabad", "Haryana"],
        correct: "Delhi",
    },
    {
        question: "3.What is the capital of United States.?",
        options: ["Chicago", "San Fransisco", "Washington DC", "Las Vegas"],
        correct: "Washington DC",
    },
    {
        question: "4.What is the financial capital of India.?",
        options: ["Delhi", "Mumbai", "Ahmedabad", "Haryana"],
        correct: "Mumbai",
    },
];

let score = 0;
let currentindex = 0;

function quiz() {
    var data = document.querySelector(".ques");
    data.innerHTML = quizdata[currentindex].question;

    var choices = document.querySelector(".choices");

    choices.innerHTML = "";

    quizdata[currentindex].options.forEach((element, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "element";
        input.value = element;

        const label = document.createElement("label");
        label.textContent = element;

        var list = document.createElement("div");
        // console.log(element)
        // list.append(element)
        list.appendChild(input);
        list.appendChild(label);
        choices.appendChild(list);
    });
}

quiz();


// function to check the answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="element"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = quizdata[currentindex].correct;

        if (userAnswer === correctAnswer) {
            score++;
        }
    }
}

// the next function will be called only when the NEXT button is pressed
function next() {
    checkAnswer();
    currentindex++;
    if (currentindex < quizdata.length) {
        quiz();
    } else {
        alert("End of Quiz. Your score is: " + score);
    }

    if (currentindex === quizdata.length - 1) {
        document.querySelector(".next").textContent = "END";
    }
}

// the prev function will be called only when the PREVIOUS button is pressed
function prev() {
    if (currentindex > 0) {
        currentindex--;
        quiz();
    } else {
        alert("No prevous questions");
    }

    if (currentindex != quizdata.length - 1) {
        document.querySelector(".next").textContent = "NEXT";
    }
}
