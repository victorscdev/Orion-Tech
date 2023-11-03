function CRIAR__navbar(array) {
    const container = document.createElement("div");
    container.classList.add("container");

    const button = document.createElement("button");
    button.classList.add("navbar-toggler");
    button.type = "button";
    button.dataset.bsToggle = "collapse";
    button.dataset.bsTarget = "#navbarNav";
    button.setAttribute("aria-controls", "navbarNav");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Toggle navigation");
    button.innerHTML = '<span class="navbar-toggler-icon"></span>';

    const collapseDiv = document.createElement("div");
    collapseDiv.classList.add("collapse", "navbar-collapse");
    collapseDiv.id = "navbarNav";

    const ul = document.createElement("ul");
    ul.classList.add("navbar-nav");

    array.forEach(element => {
        ul.appendChild(CRIAR__nav_item(element));
    });

    collapseDiv.appendChild(ul);

    container.appendChild(button);
    container.appendChild(collapseDiv);

    return container;
}


export function LER__navbar(array) {
    const nav = document.querySelector(".navbar")
    nav.append(CRIAR__navbar(array))
}

function CRIAR__nav_item(element) {
    const li = document.createElement("li");
    li.classList.add("nav-item")

    li.append(CRIAR__nav_link(element.title, element.handler))

    return li
}

function CRIAR__nav_link(title, handler) {
    const anchor = document.createElement("a");
    anchor.classList.add("nav-link");
    anchor.innerText = title
    anchor.addEventListener("click", handler)

    return anchor
}