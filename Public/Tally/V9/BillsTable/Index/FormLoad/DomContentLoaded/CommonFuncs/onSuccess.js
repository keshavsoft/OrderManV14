import afterHeadSave from "./afterHeadSave.js";
import showToTally from "./ShowToTally/index.js";

const onSuccessFunc = async (res) => {
    const fromReponse = await res.json();

    document.getElementById("htmlId").innerHTML = fromReponse.pk;

    // window.location.href = `../WithSubTable/index.html?pk=${fromReponse.pk}`;
    await afterHeadSave(fromReponse.pk);

    showToTally({ inPk: fromReponse.pk });
};

const showToTally1 = ({ inPk }) => {
    jFLocalDisplayShowtoTallyId();

    let jVarLocaltoTallyId = document.getElementById('toTallyId');

    jVarLocaltoTallyId.classList.remove("danger");

    fetchAsGet({ inPk }).then(fromPromise => {
        if (fromPromise?.insertedToTally) jVarLocaltoTallyId.classList.add("danger");
    });
};

export default onSuccessFunc;