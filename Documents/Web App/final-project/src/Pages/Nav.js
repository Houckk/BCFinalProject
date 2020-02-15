export function Nav(data){
    return (`
    <div>
        <nav id = "navBar">
            <ul id = navBarItems>
                ${NavItems(data)}
            </ul>
        </nav>
    </div>
    `)
}

export function NavItems(data){
    return (
    data.map(d=>`
        <li class = "navItem" > <a href = ${d.navLink}> ${(d.name.charAt(0).toUpperCase()+d.name.slice(1))} </a> </li>
    `).join(""))
}