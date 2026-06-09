import afterHeadSave from "../../CommonFuncs/afterHeadSave.js";
import showToTally from "../../CommonFuncs/ShowToTally/index.js";
import showBillPkOnHeader from "../../CommonFuncs/showBillPkOnHeader.js";

// import fetchAsGet from "./FetchAsGet/start.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    applyActive({ inCurrentTarget });

    const pk = prompt("Enter PK");

    if (pk === null || pk.trim() === "") return;

    showBillPkOnHeader(pk);

    afterHeadSave(pk).then();
    // debugger;
    showToTally({ inPk: pk });
};

const showToTally1 = ({ inPk }) => {
    jFLocalDisplayShowtoTallyId();

    let jVarLocaltoTallyId = document.getElementById('toTallyId');

    jVarLocaltoTallyId.classList.remove("danger");

    fetchAsGet({ inPk }).then(fromPromise => {
        if (fromPromise?.insertedToTally) jVarLocaltoTallyId.classList.add("danger");
    });
};

let jFLocalDisplayShowtoTallyId = () => {
    let jVarLocalHtmlId = 'toTallyId';
    let jVarLocaltoTallyId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocaltoTallyId === null === false) {
        jVarLocaltoTallyId.style.display = '';
    };
};

const applyActive = ({ inCurrentTarget }) => {
    const localCurrentTarget = inCurrentTarget;

    const menu = localCurrentTarget.closest("#menu");

    menu.querySelectorAll("li a.active")
        .forEach(a => a.classList.remove("active"));

    localCurrentTarget.classList.add("active");

    localCurrentTarget.classList.add("active");
};

let jFLocalToInputhtmlId = (inValue) => {
    let jVarLocalHtmlId = 'htmlId';
    let jVarLocalhtmlId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalhtmlId === null === false) {
        jVarLocalhtmlId.innerHTML = inValue;
    };
};

export { clickFuncToRun };