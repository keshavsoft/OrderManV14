export const callKSTable = async (config) => {
    if (window?.KSTable?.initShowTable) {
        return window.KSTable.initShowTable(config);
    };

    const { initShowTable, initTableWithFooter } = await import("/KSTable/v12/entry.js");
    // configJson.callbacks.vertical.onSuccess = onSuccessFunc;
    return initShowTable(config);
};