// ========================================
// Card Game - Card Database
// Part 1
// ========================================


// カード画像パス自動生成

function createImagePath(name){

    let fileName = name
        .replace(/[・ ・　]/g, "");


    // 雲盧之譜アリスのみPNG
    if(name === "雲盧之譜アリス"){
        return "images/cards/" + fileName + ".png";
    }


    return "images/cards/" + fileName + ".jpg";

}





const cards = [


/*
========================================
モンスター
========================================
*/


// フェンリル

{
    id:"fenrir",

    name:"フェンリル",

    image:createImagePath("フェンリル"),

    type:"monster",

    cost:4,

    atk:1800,


    color:[
        "グレー"
    ],


    ability:[],


    effects:[

        {
            trigger:"summon",

            action:"destroy_all_other_cards"

        }

    ],


    text:
    "召喚時、このカードを除いた場のカードを全て破壊する。",


    limit:{
        type:"normal",
        max:3
    }

},





// ネズミ3.57864

{
    id:"nezumi_357864",

    name:"ネズミ3.57864",

    image:createImagePath("ネズミ3.57864"),


    type:"monster",


    cost:1,


    atk:500,


    color:[
        "青"
    ],


    ability:[

        "SA"

    ],


    effects:[],


    text:
    "SA（召喚ターンでも攻撃可能）。",


    limit:{
        type:"semi",
        max:2
    }

},






// ニャルラトホテプ

{
    id:"nyarlathotep",

    name:"ニャルラトホテプ",

    image:createImagePath("ニャルラトホテプ"),


    type:"monster",


    cost:10,


    atk:4500,


    color:[
        "紫"
    ],


    ability:[],


    effects:[

        {

            trigger:"summon",

            action:"summon_as_other_card"

        },


        {

            trigger:"field",

            action:"draw",

            value:2

        }

    ],


    text:
    "召喚時、手札の別カードとして召喚可能。その場合でもATKと効果は変化しない。場に存在する場合、山札から2枚ドローする。",


    limit:{
        type:"normal",
        max:3
    }

},






// クトゥルフ

{
    id:"cthulhu",

    name:"クトゥルフ",

    image:createImagePath("クトゥルフ"),


    type:"monster",


    cost:10,


    atk:3500,


    color:[
        "紫"
    ],


    ability:[

        "effect_destroy_immunity"

    ],


    effects:[

        {

            passive:"cannot_be_destroyed_by_effect"

        }

    ],


    text:
    "このカードは効果による破壊を受けない。",


    limit:{
        type:"normal",
        max:3
    }

},






// 雲盧之譜アリス

{
    id:"alice_unro",

    name:"雲盧之譜アリス",

    image:createImagePath("雲盧之譜アリス"),


    type:"monster",


    cost:5,


    atk:1800,


    color:[
        "黒"
    ],


    ability:[],


    effects:[

        {

            trigger:"main",

            action:"damage",

            self:500,

            opponent:1500

        },


        {

            trigger:"lp_change",

            action:"negate_and_draw",

            value:2

        }

    ],


    text:
    "自分のLPを500減らし、相手LPを1500減らす。このカード以外のLP変動効果が発動した場合、その効果を無効化し2枚ドローできる。",


    limit:{
        type:"normal",
        max:3
    }

},






/*
========================================
魔法
========================================
*/


// これあげる

{
    id:"koreageru",

    name:"これあげる",

    image:createImagePath("これあげる"),


    type:"spell",


    cost:3,


    atk:0,


    color:[
        "ピンク"
    ],


    ability:[],


    effects:[

        {

            trigger:"activate",

            action:"search_and_draw"

        },

        {

            action:"choose_effect",

            options:[

                "draw2",

                "free_play_cost4_or_less",

                "destroy_enemy_monster",

                "damage1000"

            ]

        }

    ],


    text:
    "手札2枚を選び山札から2枚ドロー。その後4つの効果から1つ選択する。",


    limit:{
        type:"restricted",
        max:1
    }

},






// ルルイエ

{
    id:"rlyeh",

    name:"ルルイエ",

    image:createImagePath("ルルイエ"),


    type:"spell",


    cost:3,


    atk:0,


    color:[
        "青"
    ],


    ability:[],


    effects:[

        {

            passive:"cthulhu_effect_immunity"

        }

    ],


    text:
    "クトゥルフは効果による破壊を受けなくなる。",


    limit:{
        type:"normal",
        max:3
    }

}

// ========================================
// Part 2
// ========================================


// 自衛用拳銃

{
    id:"jiei_you_kenjuu",

    name:"自衛用拳銃",

    image:createImagePath("自衛用拳銃"),

    type:"trap",

    cost:1,

    atk:0,

    color:[
        "白"
    ],

    ability:[],

    effects:[
        {
            trigger:"before_damage",

            condition:"cost3_or_less",

            action:"negate_destroy",

            damage:500
        }
    ],

    text:
    "コスト3以下のカードが自分にダメージを与える前に発動。その効果を無効化し破壊。その後相手に500ダメージ。",

    limit:{
        type:"normal",
        max:3
    }
},





// 参拝

{
    id:"sanpai",

    name:"参拝",

    image:createImagePath("参拝"),

    type:"spell",

    cost:1,

    atk:0,

    color:[
        "青"
    ],

    ability:[],

    effects:[
        {
            trigger:"activate",

            action:"heal",

            value:500
        }
    ],

    text:
    "自分のLPを500回復する。",

    limit:{
        type:"normal",
        max:3
    }
},






// 五輪書

{
    id:"gorinsho",

    name:"五輪書",

    image:createImagePath("五輪書"),

    type:"spell",

    cost:5,

    atk:0,

    color:[
        "グレー"
    ],

    ability:[],

    effects:[
        {
            trigger:"activate",

            action:"buff_sword_character",

            value:500,

            duration:2
        },

        {
            action:"draw",

            value:1
        }
    ],

    text:
    "次のターン終了時まで、刀や剣を持つキャラクターのカードのATKを+500。その後1枚ドロー。",

    limit:{
        type:"normal",
        max:3
    }
},






// 墓地送り

{
    id:"hakaba_okuri",

    name:"墓地送り",

    image:createImagePath("墓地送り"),

    type:"monster",

    cost:4,

    atk:2000,

    color:[
        "黒"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"send_deck_card_to_grave"
        },

        {
            trigger:"summon",

            action:"destroy_enemy_cost7_or_more"
        }
    ],

    text:
    "召喚時、デッキから好きなカードを墓地へ送り、相手のコスト7以上のカードを破壊。",

    limit:{
        type:"normal",
        max:3
    }
},






// イソナ

{
    id:"isona",

    name:"イソナ",

    image:createImagePath("イソナ"),

    type:"monster",

    cost:8,

    atk:2000,

    color:[
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"enemy_all_monster_atk_down",

            value:2000
        }
    ],

    text:
    "召喚時、相手フィールドのモンスター全てのATKを-2000。",

    limit:{
        type:"normal",
        max:3
    }
},






// やり直し

{
    id:"yarinaoshi",

    name:"やり直し",

    image:createImagePath("やり直し"),

    type:"spell",

    cost:1,

    atk:0,

    color:[
        "グレー"
    ],

    ability:[],

    effects:[
        {
            trigger:"activate",

            action:"return_all_cards_draw",

            draw:5
        }
    ],

    text:
    "自分のカードを全て山札に戻し、5枚ドローする。",

    limit:{
        type:"normal",
        max:3
    }
},






// 一般兵士

{
    id:"ippan_heishi",

    name:"一般兵士",

    image:createImagePath("一般兵士"),

    type:"monster",

    cost:4,

    atk:1600,

    color:[
        "黒"
    ],

    ability:[],

    effects:[
        {
            trigger:"grave",

            action:"summon_gun_character_free"
        }
    ],

    text:
    "墓地へ送られた場合、銃を持つキャラクターのカードをコストなしで召喚・発動できる。",

    limit:{
        type:"normal",
        max:3
    }
},






// 書を食らう悪魔バエル

{
    id:"bael",

    name:"書を食らう悪魔バエル",

    image:createImagePath("書を食らう悪魔バエル"),

    type:"monster",

    cost:8,

    atk:3000,

    color:[
        "紫",
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            trigger:"main",

            action:"remove_magic_from_grave",

            count:3,

            atk_up:1000
        }
    ],

    text:
    "墓地の魔法カード3枚を除去することでATK+1000。",

    limit:{
        type:"normal",
        max:3
    }
},






// 異界の聖槍ロンギヌス

{
    id:"longinus",

    name:"異界の聖槍ロンギヌス",

    image:createImagePath("異界の聖槍ロンギヌス"),

    type:"monster",

    cost:7,

    atk:2500,

    color:[
        "オレンジ",
        "黄色"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"destroy_enemy_card",

            count:1
        },

        {
            trigger:"destroyed",

            action:"damage",

            value:500
        }
    ],

    text:
    "召喚時、相手の場のカード1枚を破壊。破壊された場合、相手LP-500。",

    limit:{
        type:"normal",
        max:3
    }
},






// 機械仕掛けの鳥

{
    id:"kikai_bird",

    name:"機械仕掛けの鳥",

    image:createImagePath("機械仕掛けの鳥"),

    type:"monster",

    cost:1,

    atk:300,

    color:[
        "黄色"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"mill",

            value:1
        },

        {
            action:"draw",

            value:1
        },

        {
            action:"self_grave"
        }
    ],

    text:
    "召喚時、デッキ1枚を墓地へ送り1枚ドロー。その後このカードを墓地へ送る。",

    limit:{
        type:"normal",
        max:3
    }
},






// 星読の巫女ミラ

{
    id:"mira",

    name:"星読の巫女ミラ",

    image:createImagePath("星読の巫女ミラ"),

    type:"monster",

    cost:6,

    atk:2000,

    color:[
        "紫",
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"look_top3_add1"
        },

        {
            passive:"spell_cost_down",

            value:1
        }
    ],

    text:
    "召喚時、デッキ上3枚を確認し1枚手札へ。場にいる間、魔法コスト-1。",

    limit:{
        type:"normal",
        max:3
    }
},


// ========================================
// Part 3
// ========================================


// 深淵の監視者ネフシュタン

{
    id:"nephthys",

    name:"深淵の監視者ネフシュタン",

    image:createImagePath("深淵の監視者ネフシュタン"),

    type:"monster",

    cost:8,

    atk:3600,

    color:[
        "黒"
    ],

    ability:[],

    effects:[
        {
            trigger:"turn_start",

            condition:"lp_lower_than_enemy",

            action:"destroy_enemy_card",

            value:1
        },

        {
            trigger:"after_effect",

            action:"heal",

            value:300
        },

        {
            trigger:"grave",

            action:"draw",

            value:1
        }
    ],

    text:
    "自分のLPが相手より低い場合、ターン開始時に相手の場のカード1枚を破壊。その後LPを300回復。墓地へ送られた時1枚ドロー。",

    limit:{
        type:"normal",
        max:3
    }
},






// 見えざる手の取引

{
    id:"invisible_trade",

    name:"見えざる手の取引",

    image:createImagePath("見えざる手の取引"),

    type:"spell",

    cost:3,

    atk:0,

    color:[
        "紫",
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            trigger:"activate",

            action:"discard_draw",

            discard:2,

            draw:3
        },

        {
            condition:"discard_contains_monster",

            action:"extra_draw",

            value:"monster_count"
        },

        {
            action:"damage_self",

            value:"discard_count_x500"
        }
    ],

    text:
    "手札2枚を墓地へ送り3枚ドロー。捨てたモンスター数分追加ドロー。その後捨てたカード枚数×500ダメージ。",

    limit:{
        type:"normal",
        max:3
    }
},






// 封印の箱パンドラ

{
    id:"pandora_box",

    name:"封印の箱パンドラ",

    image:createImagePath("封印の箱パンドラ"),

    type:"spell",

    cost:4,

    atk:0,

    color:[
        "紫",
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            trigger:"activate",

            action:"heal",

            value:800
        },

        {
            action:"disable_grave_effect",

            duration:2
        }
    ],

    text:
    "発動時LP800回復。2ターンの間、お互いの墓地効果を無効化。",

    limit:{
        type:"normal",
        max:3
    }
},






// 転生の花弁

{
    id:"tensei_kaben",

    name:"転生の花弁",

    image:createImagePath("転生の花弁"),

    type:"spell",

    cost:2,

    atk:0,

    color:[
        "紫",
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            trigger:"activate",

            action:"grave_monster_to_hand"
        }
    ],

    text:
    "墓地のモンスターを相手に見せ、手札に加える。",

    limit:{
        type:"normal",
        max:3
    }
},






// 光の残響

{
    id:"light_echo",

    name:"光の残響",

    image:createImagePath("光の残響"),

    type:"trap",

    cost:4,

    atk:0,

    color:[
        "黄色",
        "オレンジ"
    ],

    ability:[],

    effects:[
        {
            trigger:"own_card_destroyed",

            action:"damage",

            value:"destroy_count_x400"
        },

        {
            action:"draw",

            value:1
        }
    ],

    text:
    "自分のカードが破壊された場合発動。破壊枚数×400ダメージ。その後1枚ドロー。",

    limit:{
        type:"normal",
        max:3
    }
},






// 夢見の狭間

{
    id:"yume_no_hazama",

    name:"夢見の狭間",

    image:createImagePath("夢見の狭間"),

    type:"spell",

    cost:5,

    atk:0,

    color:[
        "紫",
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            passive:"coin_draw_effect",

            front:"draw_plus_one",

            back:"return_grave_random"
        },

        {
            passive:"cannot_destroy_on_activate"
        }
    ],

    text:
    "お互いのドロー時コイントス。表なら追加ドロー、裏なら墓地からランダムで1枚山札へ戻す。このカードは発動時破壊されない。",

    limit:{
        type:"normal",
        max:3
    }
},






// 炎輪の祈り

{
    id:"enrin_prayer",

    name:"炎輪の祈り",

    image:createImagePath("炎輪の祈り"),

    type:"spell",

    cost:4,

    atk:0,

    color:[
        "赤",
        "オレンジ"
    ],

    ability:[],

    effects:[
        {
            trigger:"activate",

            action:"revive_monster",

            atk_half:true
        },

        {
            trigger:"end_turn",

            action:"destroy_target",

            damage:500
        }
    ],

    text:
    "墓地のモンスター1体をATK半分で召喚。ターン終了時破壊し相手に500ダメージ。",

    limit:{
        type:"normal",
        max:3
    }
},






// カワウソ

{
    id:"kawauso",

    name:"カワウソ",

    image:createImagePath("カワウソ"),

    type:"monster",

    cost:4,

    atk:1800,

    color:[
        "水色"
    ],

    ability:[
        "blocker_ignore"
    ],

    effects:[],

    text:
    "ブロッカー無効。",

    limit:{
        type:"normal",
        max:3
    }
},






// 桜の精霊

{
    id:"sakura_spirit",

    name:"桜の精霊",

    image:createImagePath("桜の精霊"),

    type:"monster",

    cost:10,

    atk:2100,

    color:[
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"heal",

            value:1500
        },

        {
            action:"ally_atk_up",

            value:500,

            duration:2
        },

        {
            action:"enemy_atk_down",

            value:250,

            duration:2
        },

        {
            condition:"lp_1000_or_less",

            action:"random_grave_special_summon",

            value:2
        }
    ],

    text:
    "召喚時、LP1500回復。味方ATK+500、敵モンスターATK-250（2ターン）。LP1000以下なら墓地からランダム2体特殊召喚。",

    limit:{
        type:"normal",
        max:3
    }
},

// ========================================
// Part 3 後半
// ========================================


// 回福の魔女

{
    id:"kaifuku_majo",

    name:"回福の魔女",

    image:createImagePath("回福の魔女"),

    type:"monster",

    cost:5,

    atk:2600,

    color:[
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"heal",

            value:800
        },

        {
            action:"draw",

            value:1
        },

        {
            passive:"return_to_hand_anytime"
        }
    ],

    text:
    "召喚時、自分LP800回復し1枚ドロー。このカードはいつでも手札に戻せる。",

    limit:{
        type:"normal",
        max:3
    }
},






// 小夜峰綾香

{
    id:"sayomine_ayaka",

    name:"小夜峰綾香",

    image:createImagePath("小夜峰綾香"),

    type:"monster",

    cost:8,

    atk:1600,

    color:[
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            trigger:"once_per_turn",

            condition:"cost6_or_more",

            action:"negate_effect"
        },

        {
            trigger:"battle",

            condition:"enemy_cost8_or_more",

            action:"atk_set_above_enemy",

            value:100
        }
    ],

    text:
    "1ターンに1回、コスト6以上のカード効果を無効化。コスト8以上との戦闘時、相手ATK+100のATKになる。",

    limit:{
        type:"normal",
        max:3
    }
},






// 魔女

{
    id:"majo",

    name:"魔女",

    image:createImagePath("魔女"),

    type:"monster",

    cost:3,

    atk:1300,

    color:[
        "ピンク"
    ],

    ability:[],

    effects:[],

    text:
    "効果なし。",

    limit:{
        type:"normal",
        max:3
    }
},






// 堕落マネネ

{
    id:"daraku_manene",

    name:"堕落マネネ",

    image:createImagePath("堕落マネネ"),

    type:"monster",

    cost:1,

    atk:800,

    color:[
        "緑"
    ],

    ability:[
        "effect_destroy_immunity",
        "blocker"
    ],

    effects:[
        {
            passive:"cannot_be_destroyed_by_effect"
        }
    ],

    text:
    "効果破壊無効。ブロッカー。",

    limit:{
        type:"normal",
        max:3
    }
},






// 気付いたらいたライオン

{
    id:"lion",

    name:"気付いたらいたライオン",

    image:createImagePath("気付いたらいたライオン"),

    type:"monster",

    cost:2,

    atk:700,

    color:[
        "黒",
        "オレンジ"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"increase_cost",

            value:1
        }
    ],

    text:
    "自身のコスト+1。",

    limit:{
        type:"normal",
        max:3
    }
},






// 次回策

{
    id:"jikai_saku",

    name:"次回策",

    image:createImagePath("次回策"),

    type:"spell",

    cost:5,

    atk:0,

    color:[
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            action:"draw",

            value:2
        }
    ],

    text:
    "2枚ドロー。",

    limit:{
        type:"normal",
        max:3
    }
},






// 蓮の葉ハスター

{
    id:"hasuta",

    name:"蓮の葉ハスター",

    image:createImagePath("蓮の葉ハスター"),

    type:"monster",

    cost:3,

    atk:1200,

    color:[
        "紫"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"heal",

            value:500
        },

        {
            action:"protect_ally_cards",

            duration:"enemy_turn_end"
        }
    ],

    text:
    "召喚時LP500回復。次の相手ターン終了まで、自分フィールドの他カードは効果対象にならない。",

    limit:{
        type:"normal",
        max:3
    }
},






// 寝る子は育つって誰かが言ってた

{
    id:"neruko",

    name:"寝る子は育つって誰かが言ってた",

    image:createImagePath("寝る子は育つって誰かが言ってた"),

    type:"spell",

    cost:2,

    atk:0,

    color:[
        "青"
    ],

    ability:[],

    effects:[
        {
            action:"end_turn"
        },

        {
            action:"increase_cost",

            value:2
        }
    ],

    text:
    "自分のターンを終了し、コストを+2する。",

    limit:{
        type:"normal",
        max:3
    }
},






// 雪の包容

{
    id:"yuki_no_houyou",

    name:"雪の包容",

    image:createImagePath("雪の包容"),

    type:"spell",

    cost:5,

    atk:0,

    color:[
        "水色"
    ],

    ability:[],

    effects:[
        {
            action:"destroy_enemy_card",

            value:1
        },

        {
            action:"draw",

            value:1
        }
    ],

    text:
    "相手の場のカード1枚を破壊し、1枚ドロー。",

    limit:{
        type:"normal",
        max:3
    }
},






// 本体はパンダである模様

{
    id:"panda",

    name:"本体はパンダである模様",

    image:createImagePath("本体はパンダである模様"),

    type:"trap",

    cost:2,

    atk:0,

    color:[
        "紫"
    ],

    ability:[],

    effects:[
        {
            trigger:"battle",

            action:"negate_attack",

            count:1
        }
    ],

    text:
    "バトルフェイズに1回のみ攻撃を無効化。",

    limit:{
        type:"normal",
        max:3
    }
},


// ========================================
// Part 4
// ========================================


// 奔華片名代

{
    id:"honka_katami",

    name:"奔華片名代",

    image:createImagePath("奔華片名代"),

    type:"monster",

    cost:6,

    atk:2500,

    color:[
        "グレー"
    ],

    ability:[
        "blocker"
    ],

    effects:[
        {
            passive:"replace_destroy",

            target:"own_other_card"
        }
    ],

    text:
    "ブロッカー。破壊される時、代わりに自分の他のカードを破壊できる。",

    limit:{
        type:"normal",
        max:3
    }
},





// 世界の滅亡

{
    id:"world_end",

    name:"世界の滅亡",

    image:createImagePath("世界の滅亡"),

    type:"spell",

    cost:10,

    atk:0,

    color:[
        "緑"
    ],

    ability:[
        "special_win"
    ],

    effects:[
        {
            trigger:"activate",

            condition:[
                "cthulhu_turn_count_2",
                "rlyeh_on_field"
            ],

            action:"win_game"
        }
    ],

    text:
    "クトゥルフ召喚後往復2ターン経過し、ルルイエがある場合ゲームに勝利する。",

    limit:{
        type:"restricted",
        max:1
    }
},





// いつの日かの飛鉄「佐貫」

{
    id:"sanuki",

    name:"いつの日かの飛鉄「佐貫」",

    image:createImagePath("いつの日かの飛鉄「佐貫」"),

    type:"monster",

    cost:5,

    atk:2100,

    color:[
        "グレー"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"enemy_monster_atk_down",

            value:1500
        }
    ],

    text:
    "召喚時、相手モンスター1体のATKを1500下げる。",

    limit:{
        type:"normal",
        max:3
    }
},





// 黒き刃

{
    id:"kuroki_yaiba",

    name:"黒き刃",

    image:createImagePath("黒き刃"),

    type:"monster",

    cost:6,

    atk:2100,

    color:[
        "グレー"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"destroy_enemy_monster",

            value:1
        }
    ],

    text:
    "召喚時、相手モンスター1体を破壊する。",

    limit:{
        type:"normal",
        max:3
    }
},





// ユリカ

{
    id:"yurika",

    name:"ユリカ",

    image:createImagePath("ユリカ"),

    type:"monster",

    cost:6,

    atk:1600,

    color:[
        "オレンジ"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"summon_animal_free",

            value:1
        }
    ],

    text:
    "召喚時、動物系モンスターを1体追加召喚できる。",

    limit:{
        type:"normal",
        max:3
    }
},





// ラーツ・グローブ

{
    id:"raats_glove",

    name:"ラーツ・グローブ",

    image:createImagePath("ラーツ・グローブ"),

    type:"monster",

    cost:6,

    atk:2500,

    color:[
        "赤"
    ],

    ability:[],

    effects:[
        {
            trigger:"grave",

            action:"draw",

            value:1
        }
    ],

    text:
    "墓地へ送られた時、1枚ドロー。",

    limit:{
        type:"normal",
        max:3
    }
},





// シュラフ・アリーナ

{
    id:"schlaf_arena",

    name:"シュラフ・アリーナ",

    image:createImagePath("シュラフ・アリーナ"),

    type:"monster",

    cost:10,

    atk:4900,

    color:[
        "水色"
    ],

    ability:[],

    effects:[

        {
            trigger:"summon",

            action:"destroy_enemy_field"
        },

        {
            passive:"own_monster_cannot_attack_this_turn"
        },

        {
            passive:"negate_enemy_effect",

            count:2
        },

        {
            action:"look_enemy_hand",

            cost:1
        }

    ],

    text:
    "召喚時相手の場を全破壊。このターン自分モンスターは攻撃不可。対戦中2回相手効果を無効化できる。コスト1で相手手札確認。",

    limit:{
        type:"restricted",
        max:1
    }
},





// 運命に抗う

{
    id:"fate_resist",

    name:"運命に抗う",

    image:createImagePath("運命に抗う"),

    type:"spell",

    cost:3,

    atk:0,

    color:[
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            action:"return_own_card_hand",

            value:1
        },

        {
            action:"increase_cost",

            value:1
        }
    ],

    text:
    "自分の場のカード1枚を手札に戻し、コスト+1。",

    limit:{
        type:"normal",
        max:3
    }
},





// F1

{
    id:"f1",

    name:"F1",

    image:createImagePath("F1"),

    type:"monster",

    cost:4,

    atk:1600,

    color:[
        "緑"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"special_summon_cost3_or_less"
        },

        {
            trigger:"destroyed",

            action:"send_enemy_card_grave"
        }
    ],

    text:
    "召喚時、コスト3以下のモンスターを追加召喚。破壊時、相手カード1枚を墓地へ送れる。",

    limit:{
        type:"normal",
        max:3
    }
},





// 爆マネネ

{
    id:"baku_manene",

    name:"爆マネネ",

    image:createImagePath("爆マネネ"),

    type:"monster",

    cost:8,

    atk:2300,

    color:[
        "赤"
    ],

    ability:[],

    effects:[
        {
            action:"self_destroy",

            optional:true
        },

        {
            action:"destroy_all_cards"
        },

        {
            action:"damage",

            value:1000
        }
    ],

    text:
    "任意でこのカードを破壊し、場のカードを全て破壊。その後相手LP-1000。",

    limit:{
        type:"normal",
        max:3
    }
},





// ケニファー

{
    id:"kenifer",

    name:"ケニファー",

    image:createImagePath("ケニファー"),

    type:"monster",

    cost:3,

    atk:1000,

    color:[
        "黄色"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"increase_cost",

            value:1
        },

        {
            action:"heal",

            value:700
        }
    ],

    text:
    "召喚時、コスト+1。LP700回復。",

    limit:{
        type:"normal",
        max:3
    }
},


// ========================================
// Part 5 最終
// ========================================


// 黄金

{
    id:"kogane",

    name:"黄金",

    image:createImagePath("黄金"),

    type:"monster",

    cost:8,

    atk:3000,

    color:[
        "黄色",
        "グレー"
    ],

    ability:[
        "SA"
    ],

    effects:[
        {
            trigger:"attack_negated",

            action:"negate_and_destroy",

            once_per_turn:true
        }
    ],

    text:
    "SA。攻撃が相手効果で無効化される場合、その効果を無効化し破壊する。",

    limit:{
        type:"normal",
        max:3
    }
},






// 天空の相馬

{
    id:"tenku_soma",

    name:"天空の相馬",

    image:createImagePath("天空の相馬"),

    type:"monster",

    cost:3,

    atk:1500,

    color:[
        "黒"
    ],

    ability:[],

    effects:[],

    text:
    "効果なし。",

    limit:{
        type:"normal",
        max:3
    }
},






// マネネ

{
    id:"manene",

    name:"マネネ",

    image:createImagePath("マネネ"),

    type:"monster",

    cost:4,

    atk:1500,

    color:[
        "水色"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"damage",

            value:800
        }
    ],

    text:
    "召喚時、相手LP-800。",

    limit:{
        type:"normal",
        max:3
    }
},






// 黒九尾

{
    id:"kurokyubi",

    name:"黒九尾",

    image:createImagePath("黒九尾"),

    type:"monster",

    cost:5,

    atk:1900,

    color:[
        "黒"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"sacrifice_and_buff",

            value:200
        },

        {
            action:"destroy_cost6_or_less",

            cost:2
        }
    ],

    text:
    "自分のカードを好きなだけ墓地へ送り、1枚につきATK+200。コスト2でコスト6以下破壊。",

    limit:{
        type:"normal",
        max:3
    }
},






// ドラゴン

{
    id:"dragon",

    name:"ドラゴン",

    image:createImagePath("ドラゴン"),

    type:"monster",

    cost:8,

    atk:3400,

    color:[
        "紫"
    ],

    ability:[
        "cannot_special_summon",
        "untargetable"
    ],

    effects:[
        {
            passive:"cannot_be_targeted"
        }
    ],

    text:
    "特殊召喚不可。効果の対象にならない。",

    limit:{
        type:"normal",
        max:3
    }
},






// ハッキング

{
    id:"hacking",

    name:"ハッキング",

    image:createImagePath("ハッキング"),

    type:"spell",

    cost:5,

    atk:0,

    color:[
        "水色"
    ],

    ability:[],

    effects:[
        {
            action:"control_enemy_monster",

            condition:"cost7_or_less",

            duration:"enemy_turn_end"
        }
    ],

    text:
    "手札1枚を捨て、相手コスト7以下モンスター1体のコントロールを得る。",

    limit:{
        type:"normal",
        max:3
    }
},






// ケルベロス

{
    id:"cerberus",

    name:"ケルベロス",

    image:createImagePath("ケルベロス"),

    type:"monster",

    cost:9,

    atk:1800,

    color:[
        "紫"
    ],

    ability:[],

    effects:[
        {
            passive:"three_attacks"
        }
    ],

    text:
    "1ターンに3回連続攻撃できる。",

    limit:{
        type:"normal",
        max:3
    }
},






// 氷結の地

{
    id:"frozen_land",

    name:"氷結の地",

    image:createImagePath("氷結の地"),

    type:"spell",

    cost:5,

    atk:0,

    color:[
        "水色"
    ],

    ability:[],

    effects:[
        {
            passive:"stay_on_field"
        },

        {
            trigger:"enemy_attack",

            action:"damage",

            value:500
        }
    ],

    text:
    "使用後墓地へ送られない。相手攻撃宣言時、相手LP-500。",

    limit:{
        type:"normal",
        max:3
    }
},






// 無効化の魔術

{
    id:"negate_magic",

    name:"無効化の魔術",

    image:createImagePath("無効化の魔術"),

    type:"trap",

    cost:2,

    atk:0,

    color:[
        "ピンク"
    ],

    ability:[],

    effects:[
        {
            condition:"witch_on_field",

            action:"damage_zero",

            cost_reduce:2
        }
    ],

    text:
    "魔女がいる時発動可能。このターン受けるダメージを0にする。",

    limit:{
        type:"normal",
        max:3
    }
},






// 八影月輪

{
    id:"hachiei_getsurin",

    name:"八影月輪",

    image:createImagePath("八影月輪"),

    type:"monster",

    cost:10,

    atk:3000,

    color:[
        "グレー"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"summon_blade_card_from_outside"
        },

        {
            passive:"give_sa_to_summons"
        },

        {
            trigger:"battle_blade",

            action:"enemy_atk_zero"
        }
    ],

    text:
    "召喚時、刃物を持つカードを特殊召喚。場にいる限り召喚カード全てSA。",

    limit:{
        type:"normal",
        max:3
    }
},



// ========================================
// Part 5 後半
// ========================================


// 鎖縛の神・バロール

{
    id:"balor",

    name:"鎖縛の神・バロール",

    image:createImagePath("鎖縛の神・バロール"),

    type:"monster",

    cost:8,

    atk:2500,

    color:[
        "紫"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"disable_enemy_monster",

            duration:"next_turn_end",

            count:1
        }
    ],

    text:
    "召喚時、相手モンスター1体を次のターン終了時まで行動不能にする。",

    limit:{
        type:"normal",
        max:3
    }
},





// 永遠の追放者エリシオン

{
    id:"elysion",

    name:"永遠の追放者エリシオン",

    image:createImagePath("永遠の追放者エリシオン"),

    type:"monster",

    cost:5,

    atk:1600,

    color:[
        "青"
    ],

    ability:[],

    effects:[
        {
            trigger:"grave",

            action:"revive_self",

            once:true
        }
    ],

    text:
    "墓地へ送られた時、対戦中1回までこのカードを自分の場に召喚する。",

    limit:{
        type:"normal",
        max:3
    }
},





// 冥界の呼び声

{
    id:"meikai_call",

    name:"冥界の呼び声",

    image:createImagePath("冥界の呼び声"),

    type:"spell",

    cost:10,

    atk:0,

    color:[
        "黒"
    ],

    ability:[],

    effects:[
        {
            trigger:"activate",

            action:"special_summon_from_grave",

            target:"any_monsters"
        },

        {
            action:"return_hand_to_deck",

            value:"summoned_count"
        }
    ],

    text:
    "墓地から任意のモンスターを複数体召喚。その後、召喚した数だけ手札を山札へ戻す。",

    limit:{
        type:"normal",
        max:3
    }
},





// 静寂の剣士ジーク

{
    id:"zick",

    name:"静寂の剣士ジーク",

    image:createImagePath("静寂の剣士ジーク"),

    type:"monster",

    cost:5,

    atk:1900,

    color:[
        "青"
    ],

    ability:[],

    effects:[
        {
            passive:"immune_spell_trap"
        }
    ],

    text:
    "魔法・トラップの効果を受けない。",

    limit:{
        type:"normal",
        max:3
    }
},





// 深海の乙女ネレイデス

{
    id:"nereides",

    name:"深海の乙女ネレイデス",

    image:createImagePath("深海の乙女ネレイデス"),

    type:"monster",

    cost:6,

    atk:1800,

    color:[
        "青"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"return_grave_cards_to_deck",

            count:2
        },

        {
            action:"heal",

            value:500
        }
    ],

    text:
    "召喚時、墓地のカード2枚をデッキに戻しLP500回復。",

    limit:{
        type:"normal",
        max:3
    }
},





// 白翼の大天使ラファエル

{
    id:"raphael",

    name:"白翼の大天使ラファエル",

    image:createImagePath("白翼の大天使ラファエル"),

    type:"monster",

    cost:6,

    atk:2000,

    color:[
        "灰色"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"heal",

            value:1000
        },

        {
            action:"draw",

            value:1
        }
    ],

    text:
    "召喚時、LP1000回復しカードを1枚ドロー。",

    limit:{
        type:"normal",
        max:3
    }
},





// 黄泉の渡り鳥アストレア

{
    id:"astrea",

    name:"黄泉の渡り鳥アストレア",

    image:createImagePath("黄泉の渡り鳥アストレア"),

    type:"monster",

    cost:3,

    atk:1400,

    color:[
        "黄色"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"discard_draw",

            discard:1,

            draw:2
        }
    ],

    text:
    "場に出た時、手札1枚を捨て2枚ドロー。",

    limit:{
        type:"normal",
        max:3
    }
},





// 狩猟神アルテミス

{
    id:"artemis",

    name:"狩猟神アルテミス",

    image:createImagePath("狩猟神アルテミス"),

    type:"monster",

    cost:6,

    atk:2100,

    color:[
        "水色"
    ],

    ability:[],

    effects:[
        {
            trigger:"summon",

            action:"summon_token",

            token:{
                name:"狩猟トークン",

                atk:800
            },

            count:2
        }
    ],

    text:
    "召喚時、狩猟トークン（ATK800）を2体召喚。",

    limit:{
        type:"normal",
        max:3
    }
},

];
