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
	//var showImage = document.getElementById("lightbox");
	//showImage.classList.add('show');
	//var splash = document.querySelectorAll('lightbox-contents');
	var splash = document.querySelectorAll(".lightbox")[0];
	var splash2 = document.querySelectorAll(".lightbox-bg")[0];
	splash.classList.add('isVisible');
	splash2.classList.add('isVisible');
	//document.getElementById("img").src = "http://www.lovethispic.com/uploaded_images/53451-Cute-Dog.jpg";
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