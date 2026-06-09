const callInitTableWithFooter = async (config) => {
    if (window?.KSTable?.initTableWithFooter) {
        return window.KSTable.initTableWithFooter(config);
    }

    const { initTableWithFooter } = await import("/KSTable/v12/entry.js");

    return initTableWithFooter(config);
};

const callInitCreate = async (config) => {
    if (window?.KSTable?.initCreate) {
        return window.KSTable.initCreate(config);
    }

    const { initCreate } = await import("/KSTable/v12/entry.js");

    return initCreate(config);
};

export {
    callInitCreate, callInitTableWithFooter
};