const about = document.querySelector("#about")
const project = document.querySelector("#projects")
const div = document.querySelector(".content-holder")

const adjustAbout = () => {
    div.setAttribute('id',"about-div")
}
const adjustProject = () => {
    div.setAttribute('id',"project-div")
}
project.addEventListener("click",adjustProject)
about.addEventListener("click",adjustAbout)