let select = document.getElementById("attributes");
let input = document.getElementById("textInput");
let card = document.getElementById("card");

select.addEventListener('change', () => {
    // input.style.background = "whitesmoke";
    input.removeAttribute("placeholder");
    console.log(input);
    switch (select.value) {
      case "0":
        console.log('0',input.value);
        console.log(`Disabled`);
        input.setAttribute("disabled", "");
        break;
      case "1":
        console.log('1',input.value)
        input.setAttribute("disabled", "");
        input.setAttribute("placeholder", "This is a placeholder.");
        break;
      case "2":
        console.log('2',input.value);
        input.removeAttribute("disabled");
        break;
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
    }
})

input.onkeyup = (() => {
    console.log(input.value)
    input.setAttribute("pattern", input.value);
})