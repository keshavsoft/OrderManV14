import fetchAsGet from "./FetchAsGet/start.js";

const startFunc = ({ inPk }) => {
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

export default startFunc;