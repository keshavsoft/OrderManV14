import deleteKSTokenCookie from "../../../Common/AuthCookie/deleteKSTokenCookie.js";
import applyLoggedOutMenu from "../../../Common/MenuState/applyLoggedOutMenu.js";

const clickFuncToRun = () => {
    deleteKSTokenCookie();
    applyLoggedOutMenu();
};

export default clickFuncToRun;
