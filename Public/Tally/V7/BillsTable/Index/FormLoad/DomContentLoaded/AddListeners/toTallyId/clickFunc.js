import { startFetchAsGet } from "./FetchAsGet/start.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    debugger;
    const status = checkStatus({ inCurrentTarget });

    if (status === false) return;

    const pkToPost = document.getElementById("htmlId").innerHTML;
    const pkAsInt = parseInt(pkToPost);

    if (!pkAsInt > 0) alert("No bill is selected?");

    startFetchAsGet({ inPk: pkToPost, inCurrentTarget });
};

const checkStatus = ({ inCurrentTarget }) => {
    const localCurrentTarget = inCurrentTarget;

    if (localCurrentTarget.classList.contains("danger")) {
        alert("already posted to tally");

        return false;
    };

    return true;
};

export { clickFuncToRun };