// JavaScript Document
console.log("hello");

const HamburgerKnop = document.querySelector(".burgerKnop")

HamburgerKnop.addEventListener("click", openMenu)

function openMenu(){
    const navHamburger = document.querySelector("header nav ul:nth-of-type(3)")
    navHamburger.classList.add("toonMenu")
    console.log("hoi")
}