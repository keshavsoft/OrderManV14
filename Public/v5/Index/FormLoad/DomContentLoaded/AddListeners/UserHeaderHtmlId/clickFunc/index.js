import deleteKSTokenCookie from "./cookie/deleteKSTokenCookie.js";
import handleLogoutSuccess from "./ui/logoutSuccess/index.js";

const clickFuncToRun = () => {
    deleteKSTokenCookie();
    handleLogoutSuccess();
};

export default clickFuncToRun;
