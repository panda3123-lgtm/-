let cards = [];

let hand = [];

let cost = 1;


// cards.json読み込み

fetch("cards.json")
.then(response => response.json())
.then(data => {

    cards = data;

    // 仮の初期手札5枚
    hand = cards.slice(0,5);

    showHand();

});



// 手札表示

function showHand(){

    const handDiv = document.getElementById("hand");

    handDiv.innerHTML = "";


    hand.forEach((card,index)=>{


        const div = document.createElement("div");

        div.className = "card";


        div.innerHTML = `
        <b>${card.name}</b>
        <br>
        コスト:${card.cost}
        <br>
        ATK:${card.atk}
        `;


        div.onclick = ()=>{

            playCard(index);

        };


        handDiv.appendChild(div);


    });

}



// カード使用

function playCard(index){


    const card = hand[index];


    if(card.cost > cost){

        alert("コスト不足！");

        return;

    }



    // コスト消費

    cost -= card.cost;


    document.getElementById("cost").innerText = cost;



    // モンスターなら召喚

    if(card.type === "monster"){

        summon(card);

    }


    // 手札から削除

    hand.splice(index,1);


    showHand();

}



// 召喚

function summon(card){


    const field =
    document.getElementById("player-field");


    const div =
    document.createElement("div");


    div.className="card";


    div.innerHTML=
    `
    <b>${card.name}</b>
    <br>
    ATK:${card.atk}
    `;


    field.appendChild(div);

}
