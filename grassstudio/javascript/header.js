let mobileNavigation = document.querySelector(".mobile-with-hamburger");
let mobileDropdown = document.getElementsByClassName("list");
let layoutBreakpointMedium = 1340;
let mobileIcons = document.querySelector(".mobile-icons");

//opening menu in mobile view

export const headerToggle = () => {
	mobileIcons.addEventListener("click", () => {
		mobileIcons.classList.toggle("mobile-icons--open");
		mobileNavigation.classList.toggle("mobile-with-hamburger--open");
		for (let i = 0; i < mobileDropdown.length; i++) {
			mobileDropdown[i].classList.toggle("list--about,list--gallery");
			mobileDropdown[i].classList.toggle("list--mobile");
		}
	});
};

//tracking resize event

export const headerOnResize = (e) => {
	if (e.currentTarget.innerWidth > layoutBreakpointMedium) {
		mobileNavigation.classList.remove("mobile-with-hamburger--open");
		mobileIcons.classList.remove("mobile-icons--open");
	}
};
