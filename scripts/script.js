// JavaScript Document
console.log("hello");

const HamburgerKnop = document.querySelector(".burgerKnop")
const sluitKnop = document.querySelector(".knopjeSluit")

const dialogKnop = document.querySelector(".openDialog")
const cancelKnop = document.querySelector(".closeDialog")
const dialog = document.querySelector("dialog")

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

dialogKnop.addEventListener("click", () => {
    dialog.showModal()
})

cancelKnop.addEventListener("click", () => {
    dialog.close()
})

