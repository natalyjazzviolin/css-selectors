let url = window.location.pathname;
let selectors = {};
if(url.includes('type')) {
    selectors.Type = new Selector('HTML Tag', 'div');
    selectors.Class = new Selector('.string', '.newClass');
    selectors.ID = new Selector('#string', '#newID');
    console.log(
      `\n%cTypes, Classes, IDs`,
      "color:#0C4767; background: linear-gradient(97deg, #F9CB40 4%, #FF715B 53%, #B7FDFE 100%); font-size:1.5rem; padding:0.15rem 0.25rem; margin: 1rem auto; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;"
    );
    console.log(
      `\n%cThese are the basic CSS selectors. Here's how their syntax works:`,
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.table(selectors);
    console.log(
      "\n%cTry selecting the first card by its type and changing the color:\n",
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.log(
      "\n%cdocument.getElementsByTagName('section')[0].style.backgroundColor = 'green';",
      "font-size: .7rem;color: black;"
    );
} else if(url.includes('attribute')) {
    console.log("attributes!");
}else if(url.includes('pseudo-clas')) {
    console.log("pseudo-class!");
}else if(url.includes('pseudo-element')) {
    console.log("pseudo-elements!");
}else if(url.includes('combinator')) {
    console.log("combinators!");
} else {
    console.log(
      `\n%cHi!    👋`,
      "color:#0C4767; background: linear-gradient(97deg, #F9CB40 4%, #FF715B 53%, #B7FDFE 100%); font-size:1.5rem; padding:0.15rem 0.25rem; margin: 1rem auto; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;"
    );
    console.log(
      `\n%cSo glad to have you here.\n\nPick a topic from the list on the left and let's dive into CSS selectors!`,
      "font-weight: bold; font-size: 1rem;color: #0C4767;"
    );
}

function Selector(syntax, example) {
    this.syntax = syntax;
    this.example = example;
}