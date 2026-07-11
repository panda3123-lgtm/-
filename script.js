const hand = [
    {
        name: "一般兵士",
        cost: 4,
        atk: 1600
    },
    {
        name: "ネズミ3.57864",
        cost: 1,
        atk: 500
    },
    {
        name: "参拝",
        cost: 1,
        atk: ""
    },
    {
        name: "クトゥルフ",
        cost: 10,
        atk: 3500
    },
    {
        name: "魔女",
        cost: 3,
        atk: 1300
    }
];

const handDiv = document.getElementById("hand");

hand.forEach(card => {

    const div = document.createElement("div");

    div.className = "card";

    div.innerHTML =
        `<b>${card.name}</b><br>
        コスト:${card.cost}<br>
        ATK:${card.atk}`;

    handDiv.appendChild(div);

});
