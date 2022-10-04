let input = document.getElementById("textInput");

input.onkeyup = (() => {
    input.setAttribute("pattern", input.value);
});