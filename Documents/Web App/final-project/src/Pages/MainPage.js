import {Nav} from "./Nav.js"
//import {Images} from "./Images.js"

export function MainPage(data){
    document.querySelector('.container').innerHTML = `
    ${Nav(data.main.nav)}
`
}