// JavaScript Document
console.log("hello");

const HamburgerKnop = document.querySelector("header ul:first-of-type li:nth-of-type(1)")

HamburgerKnop.onclick = openMenu

function openMenu(){
    const navHamburger = document.querySelector("header nav ul:nth-of-type(3)")
    navHamburger.classList.add("toonMenu")
}