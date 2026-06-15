import showAllHtmlId from "./ShowAllHtmlId/start.js";
import withSerialHtmlId from "./WithSerialHtmlId/start.js";
import withSearchHtmlId from "./WithSearchHtmlId/start.js";
import loginHeaderHtmlId from "./loginHeaderHtmlId/start.js";
import loginButtonId from "./loginButtonId/start.js";

const hookAllListeners = () => {
    showAllHtmlId();
    withSerialHtmlId();
    withSearchHtmlId();
    loginHeaderHtmlId();
    loginButtonId();
};

export { hookAllListeners };