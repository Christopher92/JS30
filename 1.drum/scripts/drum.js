document.onkeydown = function (e) {
	const keyCode = e.keyCode;
	const audio = document.querySelector(`audio[data-key='${keyCode}']`)
	const key = document.querySelector(`div[data-key='${keyCode}']`)
	
	if(!audio || !key){
		return;
	}
	
	audio.play();
}