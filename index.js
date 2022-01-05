const about = document.querySelector("#about")
const skills= document.querySelector("#skills")
const project = document.querySelector("#projects")
const contact = document.querySelector("#contact")
const div = document.querySelector(".content-holder")
const greetingSec = document.querySelector(".greeting")
const aboutSec = document.querySelector(".about-section")
const projectSec = document.querySelector(".project-section")
const skillsSec = document.querySelector(".skills-section")
const contactSec = document.querySelector(".contact-section")
// let visible = Object.keys({greetingSec})[0]
// console.log(visible)
const adjustAbout = () => {
    let visible = document.getElementById("reveal")
    visible.setAttribute('id','hidden')
    div.setAttribute('id',"about-div")
    aboutSec.setAttribute('id',"reveal")
    
}
const adjustProject = () => {
    let visible = document.getElementById("reveal")
    visible.setAttribute('id','hidden')
    div.setAttribute('id',"project-div")
    projectSec.setAttribute('id','reveal')
}
const adjustSkills = () => {
    let visible = document.getElementById("reveal")
    visible.setAttribute('id','hidden')
    div.setAttribute('id',"skills-div")
    skillsSec.setAttribute('id','reveal')
}
const adjustContact = () => {
    let visible = document.getElementById("reveal")
    visible.setAttribute('id','hidden')
    div.setAttribute('id',"contact-div")
    contactSec.setAttribute('id','reveal')
}
project.addEventListener("click",adjustProject)
about.addEventListener("click",adjustAbout)
skills.addEventListener("click",adjustSkills)
contact.addEventListener("click",adjustContact)