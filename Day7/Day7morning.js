function getFormValues() {
	var name = document.getElementById('first').value;
	var name2 = document.getElementById('last').value;
	console.log(name, name2);
}

function changeColor() {
	var colorButton = document.getElementById("color-div");
	colorButton.classList.add('makeRed');
}

function toggleImage() {
	var button = document.getElementById("image");
	//var splash = document.querySelectorAll('lightbox-contents');
	button.classList.add('isVisible');
}
document.getElementById("name-btn").onclick = function() {
	getFormValues();
};


document.getElementById("color-btn").onclick = function() {
	changeColor();
};

document.getElementById("image-btn").onclick = function() {
	toggleImage();
};