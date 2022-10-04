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
      "\n%cTry selecting the first card by its type and changing the color. Copy the line below and paste it in the DevTools terminal:\n",
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.log(
      "\n%cdocument.getElementsByTagName('section')[0].style.backgroundColor = 'green';",
      "font-size: .7rem;color: black;"
    );
} else if(url.includes('attribute')) {
    selectors.A = new Selector(
      "input[placeholder]",
      'Has "placeholder" attribute.'
    );
    selectors.B = new Selector('input[pattern="cat"]', "cat");
    selectors.C = new Selector('input[pattern~="dog"]', "cat and dog");
    selectors.D = new Selector('input[pattern|="rat"]', "rat-a-tat");
    selectors.E = new Selector('input[pattern^="re"]', "repurpose");
    selectors.F = new Selector('input[pattern$="ty"]', "reality");
    selectors.G = new Selector('input[pattern*="bamboo"]', "pandas eat bamboo");
    selectors.E = new Selector(
      'input[pattern*="JavaScript" i]',
      "I like javascript"
    );
    console.log(
      `\n%cAttributes`,
      "color:#0C4767; background: linear-gradient(97deg, #F9CB40 4%, #FF715B 53%, #B7FDFE 100%); font-size:1.5rem; padding:0.15rem 0.25rem; margin: 1rem auto; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;"
    );
    console.log(
      `\n%cElements can be selected by their attributes. Here we are selecting the text input by its "placeholder" and "pattern" attributes.`,
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.log(
      "\n%cTry typing in the phrases from the example column and see what happens 😉\n",
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.table(selectors);
}else if(url.includes('pseudo-clas')) {
    selectors.A = new Selector(
      ":hover",
      'h1:hover'
    );
    selectors.B = new Selector(":checked", 'input[type="checkbox"]:checked');
    selectors.C = new Selector(
      ":has()",
      'section:has(input[type="checkbox"]:checked)'
    );
    console.log(
      `\n%cPseudo-Classes`,
      "color:#0C4767; background: linear-gradient(97deg, #F9CB40 4%, #FF715B 53%, #B7FDFE 100%); font-size:1.5rem; padding:0.15rem 0.25rem; margin: 1rem auto; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;"
    );
    console.log(
      `\n%cPseudo-classes are incredibly helpful when styling elements in altered states.\n\nA common use case is for hovering over elements. Try hovering over the title and see how the color changes.`,
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.log(
      "\n%cAnother great opportunity to use a pseudo-class is when you check a checkbox. Try it out! On this page I'm nesting the :checked class within a new one - :has().\n\nIf you are using a browser that supports it (all except Firefox), you should see the card turn orange! \n",
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.table(selectors);
}else if(url.includes('pseudo-element')) {
    selectors.A = new Selector("::marker", "li::marker");
    selectors.B = new Selector("::selection", "li::selection");
    selectors.C = new Selector("::first-letter", "li::first-letter");
    console.log(
      `\n%cPseudo-Elements`,
      "color:#0C4767; background: linear-gradient(97deg, #F9CB40 4%, #FF715B 53%, #B7FDFE 100%); font-size:1.5rem; padding:0.15rem 0.25rem; margin: 1rem auto; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;"
    );
    console.log(
      `\n%cPseudo-elements are used when you want to add to an element, or style a part of it. They can only be used once and have to be defined after the main selector.\n\nPseudo-elements are often used in CSS art!`,
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.log(
      "\n%cI've used three pseudo-elements on this page, they're listed bellow. A very useful pseudo-element that enables us to use variables in CSS is :root, and if you check - you'll see that it's used all over this little site 💅",
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.table(selectors);
}else if(url.includes('combinator')) {
    selectors.A = new Selector(
      "' ' - descendants of the first element.",
      "section div"
    );
    selectors.B = new Selector(
      "> - direct children of the first element",
      "div > p"
    );
    selectors.C = new Selector("~ - siblings", "p ~ p");
    selectors.D = new Selector("+ - adjacent siblings", "p + span");
    console.log(
      `\n%cCombinators`,
      "color:#0C4767; background: linear-gradient(97deg, #F9CB40 4%, #FF715B 53%, #B7FDFE 100%); font-size:1.5rem; padding:0.15rem 0.25rem; margin: 1rem auto; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;"
    );
    console.log(
      `\n%cCombinators allow us to specify exactly which elements to style depending on their parent/child/sibling relationship.`,
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.log(
      "\n%cMake sure to inspect the card in the middle of the page to see why the three text blocks inside it are different colors!",
      "font-weight: bold; font-size: .8rem;color: #0C4767;"
    );
    console.table(selectors);
} else {
    console.log(
      `\n%cHello!    👋`,
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