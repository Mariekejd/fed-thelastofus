// JavaScript Document
console.log("hello");

const HamburgerKnop = document.querySelector(".burgerKnop")
const sluitKnop = document.querySelector(".knopjeSluit")

HamburgerKnop.addEventListener("click", openMenu)
sluitKnop.addEventListener("click", sluitMenu)

function openMenu(){
    const navHamburger = document.querySelector("header nav ul:nth-of-type(3)")
    navHamburger.classList.add("toonMenu")
    console.log("hoi")
}

function sluitMenu(){
    const navHamburger = document.querySelector("header nav ul:nth-of-type(3)")
    navHamburger.classList.remove("toonMenu")
}