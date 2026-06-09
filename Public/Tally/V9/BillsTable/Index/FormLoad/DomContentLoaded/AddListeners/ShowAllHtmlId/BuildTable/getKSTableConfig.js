import afterHeadSave from "../../../CommonFuncs/afterHeadSave.js";
import showToTally from "../../../CommonFuncs/ShowToTally/index.js";
import showBillPkOnHeader from "../../../CommonFuncs/showBillPkOnHeader.js";

const editFunc = ({ item, index, presentPk }) => {
    afterHeadSave(presentPk).then();

    showToTally({ inPk: presentPk });
    showBillPkOnHeader(presentPk);
};

export const getKSTableConfig = async () => {
    const config = await fetch("./Index/Configs/ShowAll/config.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.table.onEdit = editFunc;

    return configJson;
};