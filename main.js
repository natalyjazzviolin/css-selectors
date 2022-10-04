let input = document.getElementById("textInput");

input.onkeyup = (() => {
    console.log(input.value)
    input.setAttribute("pattern", input.value);
})