function darkMode() {
	document.body.classList.toggle("dark");
}
function esconder(id) {
	var Divid = document.getElementById(id);
	if (Divid.hidden == true) {
		Divid.hidden = false;
	} else {
		Divid.hidden = true;
	}
}