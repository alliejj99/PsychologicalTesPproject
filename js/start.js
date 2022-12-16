const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector('#result')
const endPoint = 12;

function goResult() {
  qna.style.WebkietAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";

  setTimeout(() => {
    result.style.WebkietAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  }, 450);
    
}

// Answer
function addAnswer(answerText, qIdx) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("fadeIn");

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        // 버튼 하나만 클릭해도 모든 버튼 사라지도록
        children[i].disabled = true;
        children[i].style.WebkietAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

// Next
function goNext(qIdx) {

  if(qIdx+1 === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;

  for (let i in qnaList[qIdx].a) {
    // const element = array[i];
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }

  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

// Qustion
function begin() {
  main.style.WebkietAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";

  setTimeout(() => {
    qna.style.WebkietAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
