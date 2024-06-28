/**\
 * First I have to make elements that connect to the html and 
 * a Header and then also connect to style.css and chage the 
 * background color
 */

const mainEL = document.querySelector("main");

console.log(mainEL);


mainEL.style.backgroundColor = "var(--main-bg)";

const font = document.createElement("H1");

font.innerHTML = "DOM Manipulation";
mainEL.appendChild(font);
mainEL.classList.add("flex-ctr");

/**
 * Second I will be making a menu Bar and making it a different
 * color and adding a element to what it already has
 */

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");


  /**
   * Third I will be Iterate the entire menuLink adding anchors to 
   * each indviual href and make them actual functional buttoms
   */

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

menuLinks.forEach((link) => {

    const aElement = document.createElement("a")

    aElement.href = link.href

    aElement.textContent = link.text

    topMenuEl.appendChild(aElement)
});


  