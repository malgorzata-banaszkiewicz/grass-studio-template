let picture = document.getElementsByClassName("section-gallery__photo");
let modal = document.querySelector("#modal");
let modalImg = document.querySelector("#modal-img");
let modalClose = document.querySelector("#gallery-close");
let body = document.querySelector("body");
let modalHideClass = "section-gallery__modal--invisible";
let modalClass = "section-gallery__modal";
let bodyWithOpenModal = "body__modal--open";

//opening gallery photos in modal

export const lightboxModal = () => {
	for (let i = 0; i < picture.length; i++) {
		picture[i].addEventListener("click", (e) => {
			modalImg.style.backgroundImage = `url(${e.target.attributes.src.nodeValue})`;
			modal.classList.remove(modalHideClass);
			modal.classList.add(modalClass);
			modalImg.classList.add("section-gallery__modal--img");
			body.classList.add(bodyWithOpenModal);
		});
		modalClose.addEventListener("click", () => {
			modal.classList.add(modalHideClass);
			modal.classList.remove(modalClass);
			body.classList.remove(bodyWithOpenModal);
		});
	}
};
