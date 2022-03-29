const quizData=[
    {
        question:"what it is the Best programing language? ",
        a:'C++',
        b:'JAva',
        c:'Python', 
        d: 'java script', 
        correct :'d'     
            
    },
    { question: ' what is brain of comupter',
    a:'Ram',
    b:'Hard disk',
    c:'CPU', 
    d:'GPU',
    correct :'c'   
        
    },
    { question: 'what is html stand for?',
    a:'HyperText MarkUp language',
    b:'programming language',
    c:'styleing language', 
    d:'web server language',
    correct :'a'   
        
    },
    { question: ' Who am I',
    a:'محبوب الجماهير',
    b:'شخص ذكي',
    c:'هكرت قلبك', 
    d:'لا شئ مما سبق',
    correct :'c'   
        
    },
    { question: '? بحب شنو',
    a:'البرمجة',
    b:'الانمي',
    c:'الاكل', 
    d:'كل ما ذكر صحيح ',
    correct :'d'   
        
    }
];
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const c_text= document.getElementById('c_text');
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const d_text= document.getElementById('d_text');
const submitbtn=document.getElementById('sumbit')

let currentQuiz= 0;
let score= 0;
 
loadQuiz();


function loadQuiz() {
    deslectAnswers()
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;

    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;


}
function getSelected() {
    
    let answer=undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
             answer=answerEl.id;
        }
    });
    return answer;
}

function deslectAnswers(){

    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
   
}

submitbtn.addEventListener("click" , () => {
    //check answer
    const answer=getSelected();
    if(answer){ 
        if(answer === quizData[currentQuiz].correct){
            score++
            new Audio('right.mp3').play()
        }
    if (answer !== quizData[currentQuiz].correct){
        new Audio('W.mp3').play()
    }
        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML= `<h2> You answerd correctly  ${score} from ${quizData.length} question.<br> <p style="text-align: right;">بالعربي كدا انت واحد بليد</p> </h2><button onclick="location.reload()">Do It agian</button>`;        } 
        }

        
}
) 
