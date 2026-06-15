const createLi = ({ inClassName = "", inDisplayNone = false }) => {
    const li = document.createElement("li");
    li.className = inClassName;

    if (inDisplayNone) {
        li.style.display = "none";
    };

    return li;
};

export default createLi;