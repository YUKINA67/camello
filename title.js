if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {
    setInterval(loop, 500);

    var modalTitle = document.querySelector(".modal__title");

    if (modalTitle) {
        modalTitle.addEventListener("click", function () {
            changeTitleOnClick();
        });
    }
}

var x = 0;

var titleText = ["とぅるげる", "りんめる", "とぅるげる", "めいら", "たーやん", "ばでぃうら", "じゃんばら", "もるぎー", "かんなー", "りべるで", "がーりったったぐ", "れでいべるぎー", "てぃぐるべろるぎー", "あってぃまらってぃん", "ぎーれ たるいれ", "らっぷを", "でぃっきり", "なんなら", "ばーでぃ", "さんだる", "ばりえる", "ばにある", "ばなまる", "もりげら", "らりうら", "さげれてむぅ", "さんだる", "ぱりえる", "ぱりえる", "ぱなまる", "もりげら", "られうら", "たりたれむっぎ", "たりげらぶるがってぃ", "なーげたでもだってぃ", "いみからじむむっぺい"];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}

function changeTitleOnClick() {
    document.getElementsByTagName("title")[0].innerHTML = "クリックでタイトルが変更されました";
}
