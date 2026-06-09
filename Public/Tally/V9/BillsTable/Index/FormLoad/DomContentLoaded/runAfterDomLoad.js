import { buildHeader } from "./buildHeader.js";
import { hookAllListeners } from "./AddListeners/start.js";
import tallyStatus from "../../tallyStatus.js";

const runAfterDomLoad = () => {
    import("../../../script.js").then(fromPromise => {

        buildHeader().then(fromPromise => {
            jFLocalDisplayNonetoTallyId();

            const timer = setInterval(() => {
                tallyStatus().then();
            }, 20000);

            hookAllListeners();
        });
    });
};

let jFLocalDisplayNonetoTallyId = () => {
    let jVarLocalHtmlId = 'toTallyId';
    let jVarLocaltoTallyId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocaltoTallyId === null === false) {
        jVarLocaltoTallyId.style.display = 'none';
    };
};

export { runAfterDomLoad };
