let galleryBridge = document.querySelector("#bridge");
let bridgeButton = document.querySelector("#btn--bridge");
let grassCottageButton = document.querySelector("#btn--grass-cottage");
let galleryGrassCottage = document.querySelector("#grass-cottage");
let partialHorsesButton = document.querySelector("#btn--partial-horses");
let galleryPartialHorses = document.querySelector("#partial-horses");
let suvButton = document.querySelector("#btn--suv");
let gallerySuv = document.querySelector("#suv");
let horsesButton = document.querySelector("#btn--horses");
let galleryHorses = document.querySelector("#horses");
let cityButton = document.querySelector("#btn--city");
let galleryCity = document.querySelector("#city");
let hillButton = document.querySelector("#btn--hill");
let galleryHill = document.querySelector("#hill");
let birdButton = document.querySelector("#btn--bird");
let galleryBird = document.querySelector("#bird");
let mountainButton = document.querySelector("#btn--mountain");
let galleryMountain = document.querySelector("#mountain");
let gallerySection = document.querySelector("#section-gallery");
let bridgeFigure = document.querySelector("#figure--bridge");
let grassCottageFigure = document.querySelector("#figure--grass-cottage");
let partialHorsesFigure = document.querySelector("#figure--partial-horses");
let suvFigure = document.querySelector("#figure--suv");
let horsesFigure = document.querySelector("#figure--horses");
let cityFigure = document.querySelector("#figure--city");
let hillFigure = document.querySelector("#figure--hill");
let birdFigure = document.querySelector("#figure--bird");
let mountainFigure = document.querySelector("#figure--mountain");

const lightboxON = (el, btn, figure) => {
	gallerySection.classList.remove("section-gallery");
	gallerySection.classList.add("section-gallery--chosen");
	figure.classList.add("gallery-figure--chosen");
	el.classList.add("gallery-photo--chosen");
	btn.classList.remove("invisible");
};
const lightboxOFF = (el, btn, figure) => {
	gallerySection.classList.remove("section-gallery--chosen");
	gallerySection.classList.add("section-gallery");
	figure.classList.remove("gallery-figure--chosen");
	el.classList.remove("gallery-photo--chosen");
	btn.classList.add("invisible");
};

galleryBridge.addEventListener("click", () => {
	lightboxON(galleryBridge, bridgeButton, bridgeFigure);
});
bridgeButton.addEventListener("click", () => {
	lightboxOFF(galleryBridge, bridgeButton, bridgeFigure);
});
galleryGrassCottage.addEventListener("click", () => {
	lightboxON(galleryGrassCottage, grassCottageButton, grassCottageFigure);
});
grassCottageButton.addEventListener("click", () => {
	lightboxOFF(galleryGrassCottage, grassCottageButton, grassCottageFigure);
});

galleryPartialHorses.addEventListener("click", () => {
	lightboxON(galleryPartialHorses, partialHorsesButton, partialHorsesFigure);
});
partialHorsesButton.addEventListener("click", () => {
	lightboxOFF(galleryPartialHorses, partialHorsesButton, partialHorsesFigure);
});

gallerySuv.addEventListener("click", () => {
	lightboxON(gallerySuv, suvButton, suvFigure);
});
suvButton.addEventListener("click", () => {
	lightboxOFF(gallerySuv, suvButton, suvFigure);
});

galleryHorses.addEventListener("click", () => {
	lightboxON(galleryHorses, horsesButton, horsesFigure);
});
horsesButton.addEventListener("click", () => {
	lightboxOFF(galleryHorses, horsesButton, horsesFigure);
});

galleryCity.addEventListener("click", () => {
	lightboxON(galleryCity, cityButton, cityFigure);
});
cityButton.addEventListener("click", () => {
	lightboxOFF(galleryCity, cityButton, cityFigure);
});

galleryHill.addEventListener("click", () => {
	lightboxON(galleryHill, hillButton, hillFigure);
});
hillButton.addEventListener("click", () => {
	lightboxOFF(galleryHill, hillButton, hillFigure);
});

galleryBird.addEventListener("click", () => {
	lightboxON(galleryBird, birdButton, birdFigure);
});
birdButton.addEventListener("click", () => {
	lightboxOFF(galleryBird, birdButton, birdFigure);
});

galleryMountain.addEventListener("click", () => {
	lightboxON(galleryMountain, mountainButton, mountainFigure);
});
mountainButton.addEventListener("click", () => {
	lightboxOFF(galleryMountain, mountainButton, mountainFigure);
});
