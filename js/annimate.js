var endFlipFoxkeh = function(){//１２行目が実行されると開始される。
	var foxkeh = document.querySelector("#slidein-foxkeh img");//１８行目、９行目と同様
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);//１２行目の指示を取り除く

	foxkeh.setAttribute("class", "");//classを空白にする。（最初の状態にに戻る）
};

var endSlideinFoxkehAndStartFlipFoxkeh = function(){//２１行目が実行されると開始される
	var foxkeh = document.querySelector("#slidein-foxkeh img");//18行目と同様

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);//２１行目で出された指示を取り除く
	foxkeh.addEventListener("animationend", endFlipFoxkeh);//アニメーションが終わった時endFlipFoxkehを走らせる

	foxkeh.setAttribute("class", "flip");//classをflipに変更（cssの.flipに書かれたアニメーションが開始される）
};

var startSlideinFoxkeh = function(){//25行目が実行されると開始される
	var foxkeh = document.querySelector("#slidein-foxkeh img");//slidein-foxheh直下のimgをFoxkehと名付ける
	foxkeh.setAttribute("class", "slidein");//classをslideinに変更（cssの.slideinに書かれたアニメーションが作動する）
	
	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);//アニメーションが終わった時にendSlideinFoxkehAndStartFlipFoxkehを走らせる
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");//最初に走る　slidein-foxkehの直下にあるボタンをslideinFoxkehButtonと名付ける
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);//slideinFoxkehButtonがクリックされたときに関数startSlideinFoxkehを走らせる
