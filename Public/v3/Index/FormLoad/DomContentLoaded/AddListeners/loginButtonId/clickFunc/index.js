import handleLoginFailure from "./handleLoginFailure.js";
import handleLoginSuccess from "./handleLoginSuccess.js";
import postLogin from "./postLogin.js";

const clickFuncToRun = async () => {
    const response = await postLogin();

    if (response.status === 200) {
        handleLoginSuccess();
        return;
    };

    handleLoginFailure();
};

export default clickFuncToRun;
