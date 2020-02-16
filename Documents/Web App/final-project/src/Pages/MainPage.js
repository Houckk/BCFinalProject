import {Nav} from "./Nav.js"
import {headerNav} from "./headerNav.js"
//import {Images} from "./Images.js"
import {Title} from "./Title.js"
import {Flipbook} from "../../../../../Flipbook.js"

export function MainPage(data){
    document.querySelector('.container').innerHTML = `
    ${headerNav(data.main.headerNav)}
    ${Nav(data.main.nav)}
    ${Title(data)}
    `}