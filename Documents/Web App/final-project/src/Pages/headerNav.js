export function headerNav(data){
    return(`
    <div>
        <nav id = "headerNavBar">
            <ul id = headerNavBarItems>
                ${headerNavItems(data)}
            </ul>
        </nav>
    </div>
    `)
}

export function headerNavItems(data){
    return(
        data.map(d=>`
            <li class = "headerNavItem" > <a href = ${d.link}> ${d.display} </a> </li>
        `).join(""))
}