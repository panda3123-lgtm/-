let playerLP = 8000;

let enemyLP = 8000;


//コスト
let cost = 1;


//ターン
let turn = 1;


//デッキ
let deck=[];


//手札
let hand=[];


//場
let field=[];


//墓地
let grave=[];





//カード作成

function createDeck(){


let cards=[

{
name:"一般兵士",
type:"monster",
cost:4,
atk:1600
},

{
name:"ネズミ3.57864",
type:"monster",
cost:1,
atk:500,
SA:true
},

{
name:"クトゥルフ",
type:"monster",
cost:10,
atk:3500
},

{
name:"魔女",
type:"monster",
cost:3,
atk:1300
},

{
name:"マネネ",
type:"monster",
cost:4,
atk:1500
}


];



for(let i=0;i<10;i++){

cards.forEach(card=>{

deck.push(
{
...card,
summoned:false,
attacked:false
}
);


});


}


}







//初期化

createDeck();



for(let i=0;i<5;i++){

draw();

}



update();








//ドロー

function draw(){


if(deck.length>0){

let n=Math.floor(
Math.random()*deck.length
);


hand.push(deck.splice(n,1)[0]);


}


}








//手札表示

function showHand(){


let area=
document.getElementById("hand");


area.innerHTML="";



hand.forEach((card,index)=>{


let div=document.createElement("div");


div.className="card";


div.innerHTML=

`
<b>${card.name}</b>
<br>
コスト:${card.cost}
<br>
ATK:${card.atk}
`;



div.onclick=()=>useCard(index);



area.appendChild(div);


});


}







//カード使用

function useCard(index){



let card=hand[index];



if(cost < card.cost){

alert("コスト不足");

return;

}



cost-=card.cost;



hand.splice(index,1);



if(card.type==="monster"){


card.summoned=true;


field.push(card);


}


update();


}








//場表示

function showField(){


let area=
document.getElementById("player-field");


area.innerHTML="";



field.forEach(card=>{


let div=document.createElement("div");


div.className="card";


div.innerHTML=

`
<b>${card.name}</b>
<br>
ATK:${card.atk}
<br>

${card.summoned&&!card.SA?
"召喚酔い":
"攻撃可能"}

<button onclick="attack(${card.atk},this)">
攻撃
</button>

`;



area.appendChild(div);


});


}








//攻撃

function attack(atk,btn){


let card=field.find(
c=>c.atk===atk
);



if(card && card.summoned&&!card.SA){

alert("召喚したターンは攻撃できません");

return;

}



if(card.attacked){

alert("攻撃済み");

return;

}



enemyLP-=atk;


card.attacked=true;



update();



}







//ターン終了

function endTurn(){


turn++;


cost+=2;


if(cost>10){

cost=10;

}



//攻撃リセット

field.forEach(card=>{


card.attacked=false;


card.summoned=false;


});



draw();



update();


}








function update(){


document.getElementById("playerLP").innerText=playerLP;


document.getElementById("enemyLP").innerText=enemyLP;


document.getElementById("cost").innerText=cost;


showHand();


showField();


}
