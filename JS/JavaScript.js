let slideIndex = 0;

let allImages = document.getElementsByClassName("mySlides");
			
for (var i = 0; i < allImages.length; i++) {
	allImages[i].style.display = "none";
}
allImages[slideIndex].style.display = "block";

function moveSlides(n) {
	if ((slideIndex == (allImages.length - 1)) && (n == 1)) {
		slideIndex = 0;
	} else if ((slideIndex == 0) && (n == -1)) {
		slideIndex = allImages.length - 1;
	} else  {
		slideIndex = slideIndex + n;
	}
	for (var i = 0; i < allImages.length; i++) {
		allImages[i].style.display = "none";
	}						
	allImages[slideIndex].style.display = "block";
}	