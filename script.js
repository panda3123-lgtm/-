let allCards = [];

let deck = [];

let hand = [];

let field = [];

let grave = [];

let playerLP = 8000;

let cost = 1;

let turn = 1;



// cards.json読み込み

fetch("cards.json")

.then(response => response.json())

.then(data => {


    allCards = data;


    startGame();


});




// ゲーム開始

function startGame(){


    deck = [...allCards];


    shuffle(deck);



    // 初期手札5枚

    for(let i = 0; i < 5; i++){

        draw();

    }


    update();


}




// シャッフル

function shuffle(array){


    for(let i=array.length-1;i>0;i--){


        let j=Math.floor(Math.random()*(i+1));


        [array[i],array[j]]=[array[j],array[i]];


    }

}




// ドロー

function draw(){


    if(deck.length===0){

        alert("デッキ切れ！敗北");

        return;

    }


    hand.push(deck.shift());


}




// 手札表示

function update(){


    document.getElementById("playerLP").innerText = playerLP;

    document.getElementById("cost").innerText = cost;



    let handDiv=document.getElementById("hand");

    handDiv.innerHTML="";



    hand.forEach((card,index)=>{


        let div=document.createElement("div");


        div.className="card";


        div.innerHTML=`

        <b>${card.name}</b>

        <br>

        コスト:${card.cost}

        <br>

        ATK:${card.atk}

        `;



        div.onclick=()=>playCard(index);



        handDiv.appendChild(div);



    });



    let fieldDiv=document.getElementById("player-field");

    fieldDiv.innerHTML="自分モンスターエリア";



    field.forEach(card=>{


        let div=document.createElement("div");


        div.className="card";


        div.innerHTML=`

        <b>${card.name}</b>

        <br>

        ATK:${card.atk}

        `;



        div.onclick=()=>attack(card);



        fieldDiv.appendChild(div);



    });



}





// カード使用

function playCard(index){


    let card=hand[index];



    if(card.cost > cost){


        alert("コスト不足");

        return;


    }



    cost -= card.cost;



    hand.splice(index,1);



    if(card.type==="monster"){


        field.push(card);


    }


    else{


        alert(card.name+"を発動しました");


        grave.push(card);


    }



    update();


}





// 攻撃

function attack(card){


    let damage = card.atk;


    alert(

    card.name+

    "で攻撃！\n"+

    damage+

    "ダメージ"

    );


}





// ターン終了

function endTurn(){


    turn++;



    // コスト回復

    cost += 2;


    if(cost>10){

        cost=10;

    }



    // ドロー

    draw();



    update();


}
