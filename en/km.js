function resize_container() {
	var padding = 0.35;
	var container_height = window.innerHeight * (1 - padding);
	var container_paddingTop = window.innerHeight * padding;

	var     txt_container_height = container_height.toString()     + "px";
	var txt_container_paddingTop = container_paddingTop.toString() + "px";

	document.getElementById("pricing_main").style.minHeight = txt_container_height;
	document.getElementById("note_out").style.minHeight = txt_container_height;
	document.getElementById("note_kid").style.minHeight = txt_container_height;
	document.getElementById("note_mix").style.minHeight = txt_container_height;
	document.getElementById("note_out").style.paddingTop = txt_container_paddingTop;
	document.getElementById("note_kid").style.paddingTop = txt_container_paddingTop;
	document.getElementById("note_mix").style.paddingTop = txt_container_paddingTop;
}

resize_container();
