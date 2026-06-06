import tallyDownId from "./TallyDownId/start.js";
import tallyUpId from "./TallyUpId/start.js";

const hookAllListeners = () => {
    tallyDownId();
    tallyUpId()
};

export { hookAllListeners };