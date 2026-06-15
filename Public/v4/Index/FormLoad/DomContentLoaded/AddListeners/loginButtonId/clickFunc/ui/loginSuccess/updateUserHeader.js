import getUserCode from "../../token/getUserCode.js";

const updateUserHeader = () => {
    document
        .getElementById("UserHeaderHtmlId")
        .querySelector("span")
        .textContent = getUserCode();
};

export default updateUserHeader;
