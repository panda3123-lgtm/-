// =====================
// 画面管理
// =====================


function hideAll(){

document.getElementById("titleScreen").classList.add("hide");

document.getElementById("menuScreen").classList.add("hide");

document.getElementById("subScreen").classList.add("hide");

}





function openMenu(){

hideAll();

document.getElementById("menuScreen")
.classList.remove("hide");

}





function backMenu(){

hideAll();

document.getElementById("menuScreen")
.classList.remove("hide");

}





function showSub(title,text){

hideAll();


document.getElementById("subScreen")
.classList.remove("hide");


document.getElementById("subTitle")
.innerHTML=title;


document.getElementById("subContent")
.innerHTML=text;

}





// =====================
// 各画面
// =====================



function openBattle(){

showSub(

"対戦",

`
<h2>対戦準備中</h2>

<p>
ここに対戦画面を追加します。
</p>

`

);

}





function openDeckEdit(){

showSub(

"デッキ編集",

`

<p>
デッキ名：
未設定
</p>


<p>
現在：
0 / 60枚
</p>


<button>
カード追加
</button>


<button>
保存
</button>

`

);

}





function openCardList(){

showSub(

"カード一覧",

`

<div class="card">

<h3>カード</h3>

<p>
データ読み込み予定
</p>

</div>

`

);

}





function openTutorial(){

showSub(

"チュートリアル",

`

<h2>
基本ルール
</h2>


<p>
相手LPを0にすると勝利します。
</p>


<p>
カードを使用するにはコストが必要です。
</p>


`

);

}





function openSetting(){

showSub(

"設定",

`

<p>
音量設定
</p>

<p>
操作設定
</p>

`

);

}





function gameEnd(){

alert(

"ゲームを終了します"

);

}
