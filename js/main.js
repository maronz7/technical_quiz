'use strict'

const quiz = [
  {
    question : "16進小数0.FEDCを4倍したものはどれか。",
    answer : ["FDB8","FB78","FB70","EDC0" ],
    correct : "FB70"
  },
  {
    question : "ソフトウェア開発のプロセスモデルのうち，開発サイクルごとにリスクを最小にしながら，開発サイクルを繰り返すことによって，システムの完成度を高めていくプロセスモデルはどれか。",
    answer : ["ウォータフォールモデル","スパイラルモデル","成長モデル","プロトタイピングモデル" ],
    correct : "スパイラルモデル"
  },
  {
    question : "Webサーバにおいて，クライアントからの要求に応じてアプリケーションプログラムを実行して，その結果をブラウザに返すなどのインタラクティブなページを実現するために，Webサーバと外部プログラムを連携させる仕組みはどれか。",
    answer : ["CGI","HTML","MIME","URL" ],
    correct : "CGI"
  },
  {
    question : "コンピュータをLAN経由で起動させる機能をWake on LAN(WOL)という。この機能を利用することによって効率よく行えるものはどれか。",
    answer : ["遠隔地にあるPCのソフトウェア保守","システム誤動作の検知","トラフィック状況の管理","不正アクセスの監視" ],
    correct : "遠隔地にあるPCのソフトウェア保守"
  },
  {
    question : "オブジェクト指向開発において，オブジェクトのもつ振る舞いを記述したものを何というか。",
    answer : ["インスタンス","クラス","属性","メソッド" ],
    correct : "メソッド"
  },
];

let quizIndex = 0;
let quizLength = quiz.length;

const $buttons = document.getElementsByClassName('button');
const buttonLength = $buttons.length;

let score = 0;
const $score = document.getElementById('score'); // 点数
const $result = document.getElementById('result'); // 結果の評価

updateScore();
setupQuiz();
clickHandler();

function setupQuiz() {

  document.getElementById('quizIndex').textContent = `第${quizIndex + 1}問`;
  document.getElementById('question').textContent = quiz[quizIndex].question;
  
  let buttonIndex = 0;
  while (buttonIndex < buttonLength){
    $buttons[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
  }
}

function clickHandler() {

  for (let i = 0; i < buttonLength; i++){
    $buttons[i].addEventListener('click', (e) => {
      if(e.target.textContent === quiz[quizIndex].correct){
      window.alert("正解！");
      score++;
    } else {
      window.alert("不正解");
    }

    if(quizIndex < quizLength - 1){
      quizIndex++;
      $buttons[i].blur();
      setupQuiz();
      updateScore();
    } else {
      displayResult();
    }
  })
}
}

function updateScore() {
  $score.textContent = ` ${quizLength}問中 ${score}問正解！`
}

function displayResult() {
  if(score === quizLength) {
    $result.textContent = "素晴らしい！"
  } else if (score > quizLength / 2){
    $result.textContent = "なかなかやるね！"
  } else {
    $result.textContent = "もう少し頑張ろう！"
  }
}



