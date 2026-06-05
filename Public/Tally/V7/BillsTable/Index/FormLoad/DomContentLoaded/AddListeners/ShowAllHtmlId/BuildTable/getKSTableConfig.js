import afterHeadSave from "../../../CommonFuncs/afterHeadSave.js";


const editFunc = ({ item, index, presentPk }) => {
    console.log("item, index, presentPk : ", item, index, presentPk);
    afterHeadSave(presentPk).then();
};
//     presentPk, inOnEdit: inConfig?.callbacks?.table?.onEdit

export const getKSTableConfig = async () => {
    const config = await fetch("./Index/Configs/ShowAll/config.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.table.onEdit = editFunc;

    return configJson;
};