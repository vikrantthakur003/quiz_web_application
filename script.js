const quiz = [
    {
        question:"Who is the Prime Minister of India",
        a:"Narendra Modi",
        b:"Yogi Adityanath",
        c:"Suresh Rana",
        d:"Rahul Gandhi",
        correct:"a",
    },

    {
        question:"How many days are there in a week?",
        a:"12",
        b:"10",
        c:"7",
        d:"5",
        correct:"c"
    },

    {
        question:"How many letters are there in the English alphabet?",
        a:"21",
        b:"26",
        c:"30",
        d:"15",
        correct:"b"
    },

    {
        question:"Name the National bird of India?",
        a:"peacock",
        b:"cock",
        c:"Eagel",
        d:"Sparrow",
        correct:"a",
    }
];

let index = 0;
let correct = 0;
let incorrect = 0;
let total = quiz.length;
let Question = document.getElementById("Question");
let option = document.querySelectorAll("input[type='radio']");

let loadQuestion = ()=>{
      if(total==index)
      {
        return quizEnd();
      }
       reset();
      const data = quiz[index];
      Question.innerHTML = `${index+1}) ${data.question}` 
      option[0].nextElementSibling.innerText = data.a
      option[1].nextElementSibling.innerText = data.b
      option[2].nextElementSibling.innerText = data.c
      option[3].nextElementSibling.innerText = data.d

    }

    document.querySelector("#submit").addEventListener(
        "click",
        function() {
            const data = quiz[index]
            const ans = getAnswer()
            if (ans === data.correct) {
                correct++;
            } else {
                incorrect++;
            }
            index++;
            loadQuestion()
        }
    )

    const getAnswer = ()=>{
        let ans;
        option.forEach(
            (optionE1)=>{
                if (optionE1.checked) {
                    ans = optionE1.value;
                }
            }
        )
        return ans;
    }


    const reset = ()=>{
        option.forEach(
            (optionE1)=>{
               optionE1.checked = false;
            }
        )
    }


    const quizEnd = () => {
        // console.log(document.getElementsByClassName("container"));
        document.getElementsByClassName("container")[0].innerHTML = `
            <div class="col">
                <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
            </div>
        `
    }
    
    loadQuestion();
