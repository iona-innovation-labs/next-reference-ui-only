function toggleMenu() {
	document.getElementById("isToggle").classList.toggle("open");
	var isOpen = document.getElementById("navigation");
	if (isOpen.style.display === "block") {
		isOpen.style.display = "none";
	} else {
		isOpen.style.display = "block";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function changeTheme(e) {
	e.preventDefault();
	const htmlTag = document.getElementsByTagName("html")[0];

	if (htmlTag.className.includes("dark")) {
		htmlTag.className = "light";
	} else {
		htmlTag.className = "dark";
	}
}

function changeLayout(e) {
	e.preventDefault();
	const switcherRtl = document.getElementById("switchRtl");
	const htmlTag = document.getElementsByTagName("html")[0];
	if (switcherRtl.innerText === "LTR") {
		htmlTag.dir = "ltr";
	} else {
		htmlTag.dir = "rtl";
	}
}

export { toggleMenu, topFunction, changeTheme, changeLayout };
