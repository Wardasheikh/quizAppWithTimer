

let data = [
    {
        Q: "Q:JS is used for?",
        a: "frontend",
        b: "Animation",
        c: "Dynamically update content",
        d: "backend",
        ans: "ans3",
    },
    {
        Q: "Q:Full form of JS?",
        a: "Javascript",
        b: "javaScience",
        c: "javaS",
        d: "Javasecure",
        ans: "ans1",
    },
    {
        Q: "Q:Who developed JS?",
        a: "santa",
        b: "brenden Eich",
        c: "george",
        d: "Neck",
        ans: "ans2",
    },
    {
        Q: "Q:When JS developed?",
        a: "1995",
        b: "1990",
        c: "1999",
        d: "1892",
        ans: "ans1",
    },
];

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers = document.querySelectorAll(".options");
let num = 0;
let score = 0;
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");

let timer = 5; // Set the initial time
let timerInterval; // Declare a variable for the timer

// Function to start the timer
function startTimer() {
    document.getElementById("timer").innerText = `Time: ${timer}`;
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById("timer").innerText = `Time: ${timer}`;
        if (timer === 0) {
            clearInterval(timerInterval); // Stop the timer
            next(); // Automatically move to the next question
        }
    }, 1000);
}

// Function to check the selected answer
function checkAns() {
    let ans;
    answers.forEach((curElement) => {
        if (curElement.checked) {
            ans = curElement.id;
        }
    });
    return ans;
}

// Function to deselect all options
function disSelect() {
    answers.forEach((curElement) => {
        curElement.checked = false;
    });
}

// Function to load the next question or show the score
function next() {
    let checkedAns = checkAns();
    if (checkedAns == data[num].ans) {
        score++;
    }
    num++;
    disSelect();
    if (num < data.length) {
        question.innerHTML = data[num].Q;
        option1.innerHTML = data[num].a;
        option2.innerHTML = data[num].b;
        option3.innerHTML = data[num].c;
        option4.innerHTML = data[num].d;

        clearInterval(timerInterval); // Stop the current timer
        timer = 5; // Reset the timer
        startTimer(); // Restart the timer for the next question
    } else {
        myScore.innerHTML = `You scored ${score}/${data.length}<br/><br/>
        <button onclick="location.reload()">Play Again</button>`;
        nextBtn.style.display = "none";
    }
}

// Initialize the first question and start the timer
question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;
startTimer(); // Start the timer when the quiz begins
