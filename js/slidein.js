var endSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "");
};

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");slidein-foxkeh直下のbuttonを
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
