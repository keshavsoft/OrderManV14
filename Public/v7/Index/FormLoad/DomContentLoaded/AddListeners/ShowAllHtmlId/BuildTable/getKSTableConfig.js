const onReadFail = (inResponseStatus) => {
    console.log("onReadFail", inResponseStatus);
    const loginModal =
        document.getElementById("loginModal");

    loginModal.classList.remove("hidden");
};

export const getKSTableConfig = async () => {

    const config = await fetch("./Index/Configs/WithSerial/config.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.table.onReadFail = onReadFail;

    return configJson;
};