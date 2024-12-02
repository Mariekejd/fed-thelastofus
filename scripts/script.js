// JavaScript Document
console.log("hello");

const HamburgerKnop = document.querySelector(".burgerKnop")
const sluitKnop = document.querySelector(".knopjeSluit")

HamburgerKnop.addEventListener("click", openMenu)
sluitKnop.addEventListener("click", sluitMenu)

function openMenu(){
    const navHamburger = document.querySelector("header nav div ul")
    navHamburger.classList.add("toonMenu")

    document.body.classList.add("no-scroll")
    console.log("hoi")
}

function sluitMenu(){
    const navHamburger = document.querySelector("header nav div ul")
    navHamburger.classList.remove("toonMenu")

    document.body.classList.remove("no-scroll")

}