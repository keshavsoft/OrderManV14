import buildTable from "./BuildTable/index.js";
import applyActive from "../../../../applyActive.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    // console.log("inCurrentTarget : ", inCurrentTarget);
    applyActive({ inCurrentTarget });
    // inCurrentTarget.classList.add("active");

    buildTable().then();
    jFLocalDisplayNonetoTallyId();
    jFLocalToInputkSSubTableContainer();
};

let jFLocalToInputkSSubTableContainer = (inValue) => {
    let jVarLocalHtmlId = 'kSSubTableContainer';
    let jVarLocalkSSubTableContainer = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalkSSubTableContainer === null === false) {
        jVarLocalkSSubTableContainer.innerHTML = inValue;
    };
};

let jFLocalDisplayNonetoTallyId = () => {
    let jVarLocalHtmlId = 'toTallyId';
    let jVarLocaltoTallyId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocaltoTallyId === null === false) {
        jVarLocaltoTallyId.style.display = 'none';
    };
};

export { clickFuncToRun };