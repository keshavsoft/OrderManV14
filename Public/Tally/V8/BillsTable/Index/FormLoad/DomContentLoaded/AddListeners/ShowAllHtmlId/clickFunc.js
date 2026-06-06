import buildTable from "./BuildTable/index.js";
import applyActive from "../../../../applyActive.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    // console.log("inCurrentTarget : ", inCurrentTarget);
    applyActive({ inCurrentTarget });
    // inCurrentTarget.classList.add("active");

    buildTable().then();
    jFLocalDisplayNonetoTallyId();
};

let jFLocalDisplayNonetoTallyId = () => {
    let jVarLocalHtmlId = 'toTallyId';
    let jVarLocaltoTallyId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocaltoTallyId === null === false) {
        jVarLocaltoTallyId.style.display = 'none';
    };
};

export { clickFuncToRun };