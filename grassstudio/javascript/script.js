import { headerOnResize, headerToggle } from "./header.js";
import { lightboxModal } from "./modal.js";

//functions calls
window.addEventListener("load", () => {
	lightboxModal();
	headerToggle();
});

window.addEventListener("resize", (e) => {
	headerOnResize(e);
});
