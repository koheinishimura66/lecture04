var endSlideinFoxkeh = function(){//10行目が実行されたときに開始される
	var foxkeh = document.querySelector("#slidein-foxkeh img");//７行目と同じ
	foxkeh.setAttribute("class", "");//classを空白に変更（最初の状態に戻る）
};

var startSlideinFoxkeh = function(){//14行目が実行されると開始する
	var foxkeh = document.querySelector("#slidein-foxkeh img");//slidein-foxkeh直下のimgをfoxkehと名付ける
	foxkeh.setAttribute("class", "slidein");//classをslideinにっする（cssの.slideinに書かれているアニメーションが実行される

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);//アニメーションが終わった時endSlideinFoxkehを走らせる
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");//slidein-foxkeh直下のbuttonをslideinFoxkehButtonと名付ける
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);//clickしたときにstartSlideinFoxkehを開始
