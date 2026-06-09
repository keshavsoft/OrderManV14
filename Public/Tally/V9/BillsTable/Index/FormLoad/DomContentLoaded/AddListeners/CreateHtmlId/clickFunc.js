import buildTable from "./BuildTable/index.js";
import applyActive from "../../../../applyActive.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    applyActive({ inCurrentTarget });

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