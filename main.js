let select = document.getElementById("attributes");
let input = document.getElementById("textInput");

select.addEventListener('change', () => {
    console.log();
    if (parseInt(select.value) > 0) {
        input.removeAttribute("disabled")
        console.log(`Selected`)
    } else {
        console.log(`Disabled`)
        input.setAttribute("disabled", "");
    }
})