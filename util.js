function el(attribute) {
    return document.querySelector(attribute);
};

function elAll(attribute) {
    return document.querySelectorAll(attribute);
}

function navigate(to){
	window.location.hash ='#'+ to;
}