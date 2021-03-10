 function myFun(value){
	let pic;
	if(value===0){
		pic="bulb/bulb-nb.jpg";

	}
	else{

		pic="bulb/bulb-f.jpg";
	}
		document.getElementById("bulb").src=pic;
}
myFun();