var wrapperBg = document.getElementById("page")
var wrapperText = document.getElementById("textOpening")

window.addEventListener("load", function(){
    wrapperBg.classList.toggle("loadFadeOut");
    wrapperText.classList.toggle("loadText")
})