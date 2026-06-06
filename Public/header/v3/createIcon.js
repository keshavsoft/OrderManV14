import icons from "./icons.js";

export const createIcon = ({
    inIconPaths = [],
    inClassName = ""
}) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttribute("class", inClassName);
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("viewBox", "0 0 24 24");

    inIconPaths.forEach(d => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        svg.appendChild(path);
    });

    // return icons.search;

    return document
    .createRange()
    .createContextualFragment(icons.search)
    .firstElementChild;
    // return svg;
};