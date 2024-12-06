// JavaScript Document
console.log("hello");

const HamburgerKnop = document.querySelector(".burgerKnop")
const sluitKnop = document.querySelector(".knopjeSluit")

const dialogKnop = document.querySelector(".openDialog")
const cancelKnop = document.querySelector(".closeDialog")
const dialog = document.querySelector("dialog")

const dialogKnop2 = document.querySelector(".openDialog2")
const cancelKnop2 = document.querySelector(".closeDialog2")
const dialog2 = document.querySelector("dialog:nth-of-type(2)")

const dialogKnop3 = document.querySelector(".openDialog3")
const cancelKnop3 = document.querySelector(".closeDialog3")
const dialog3 = document.querySelector("dialog:nth-of-type(3)")

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

dialogKnop2.addEventListener("click", () => {
    dialog2.showModal()
})

cancelKnop2.addEventListener("click", () => {
    dialog2.close()
})

dialogKnop3.addEventListener("click", () => {
    dialog3.showModal()
})

cancelKnop3.addEventListener("click", () => {
    dialog3.close()
})

