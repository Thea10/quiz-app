/* const initial = document.getElementById('input');

window.onload = initial.classList.add('show');

const myname = document.getElementById('myname');

myname.addEventListener('submit', e =>{e.preventDefault();
    console.log(e)} ); */


const question = document.getElementById('question');
const options = Array.from( document.getElementsByClassName('option') );
const scoretext = document.getElementById('score');
const modal = document.getElementById('modal');
const spantext = document.getElementById('display');



let currentQuestion ={};
let answered = false;
let score = 0;
let counter = 0;
let unanswered = [];
const addscore = 5;
//const max =7;

let questions = [ ];

fetch("questions.json").then(que =>{
    //console.log(que);
    return que.json();
}).then(loadQuestions =>{
    console.log(loadQuestions);
    questions = loadQuestions;
    start();
    
});

start = () => {
    counter = 0;
    score = 0;
    unanswered = [...questions];
    getQuestion();
}

getQuestion = () => {
    if (unanswered.length === 0 /*|| counter > max */){
       localStorage.setItem("recentscore", score);
       return modal.classList.add('show');
    } 

    counter++;
     const questionPosition = Math.floor(Math.random() * unanswered.length);
     currentQuestion = unanswered[questionPosition];
     question.innerHTML = counter + ".  " + currentQuestion.question;

     options.forEach(option => {
         const position = option.dataset['position'];
         option.innerHTML = currentQuestion["option" + position];   
     });
     unanswered.splice(questionPosition, 1);

     answered = true;

};



options.forEach(option => {
        option.addEventListener('click', e => {
          //  console.log(e.target);
        if(!answered) return;
            
         answered = false;
          const clicked = e.target;
          const choice = clicked.dataset['position'];
        
        const addclass  =
        choice === currentQuestion.answer ? "correct": "wrong" ;

        addclass === "correct" ? score += addscore : 0;

        scoretext.innerHTML = score;
         spantext.innerHTML = score;
            
        clicked.parentElement.classList.add(addclass);
        
            
        setTimeout( () => {
           clicked.parentElement.classList.remove(addclass);
             getQuestion();
        }, 1500);
    });
});

//start();









