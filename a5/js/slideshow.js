var myImages =["images/cube.jpg", "images/glass.jpg","images/pyramid.jpg","images/shapes.jpg","images/sphere.jpg"];

var captionImages =["CUBE","GLASS","PYRAMID","SHAPES","SPHERE"];

var index = 0;
var countdown = 4; // seconds
var timerDisplay = document.getElementById("timer");
timerDisplay.textContent = document.getElementById("auto").checked ? countdown : "--"; //Trying to force the timer to not show 4 on load with countdown unchecked.
var intervalId = null;

function updateImage() {
	document.getElementById("slideshow").src = myImages[index];
	document.getElementById("slideshow").alt = captionImages[index];
	document.getElementById("caption").textContent = captionImages[index];
}

function next() {
	if (myImages.length == index + 1)
		index = 0;
	else
		index++;
	updateImage();
	resetCountdown();
}

function back() {
	if (index === 0)
		index = myImages.length - 1;
	else
		index--;
	updateImage();
	resetCountdown();
}

function autoSlideTick() {
	if (document.getElementById("auto").checked) {
		countdown--;
		timerDisplay.textContent = countdown;
		if (countdown <= 0) {
			next(); // resets countdown as part of next()
		}
	} else {
		timerDisplay.textContent = "--";
	}
}

function resetCountdown() {
	if (document.getElementById("auto").checked) {
		countdown = 4;
		timerDisplay.textContent = countdown;
	} else {
		timerDisplay.textContent = "--";
	}
}

// Bind buttons
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

// Start interval timer
intervalId = setInterval(autoSlideTick, 1000); // ticks every second
