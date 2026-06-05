import onSuccessFunc from "./onSuccess.js";
// import { initCreate, initTableWithFooter } from "/KSTable/v8/entry.js";
import { callInitCreate, callInitTableWithFooter } from "./callKSTable.js";

const afterHeadSave = async (inPk) => {
    const config = await fetch("Index/Configs/AddItem/config.json");
    const configJson = await config.json();

    configJson.endPoints.findFromParams = configJson.endPoints.findFromParams.replace("{pk}", inPk);
    configJson.callbacks.vertical.onSuccess = onSuccessFunc;

    await callInitCreate(configJson);

    const configForSubTable = await fetch("Index/Configs/AddItem/configForSubTable.json");
    const configForSubTableJson = await configForSubTable.json();

    const findColumn = configForSubTableJson.columnsConfig.find(element => {
        return element.columnName === "ParentPk";
    });

    findColumn.defaultValue = inPk.toString();
    configForSubTableJson.endPoints.read += inPk.toString();

    await callInitTableWithFooter(configForSubTableJson);
};

export default afterHeadSave;