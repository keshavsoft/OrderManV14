import getTokenFromCookie from "../AddListeners/loginButtonId/clickFunc/token/getTokenFromCookie.js";
import hideLoginMenu from "../AddListeners/loginButtonId/clickFunc/ui/loginSuccess/hideLoginMenu.js";
import showUserMenu from "../AddListeners/loginButtonId/clickFunc/ui/loginSuccess/showUserMenu.js";
import updateUserHeader from "../AddListeners/loginButtonId/clickFunc/ui/loginSuccess/updateUserHeader.js";
import handleLogoutSuccess from "../AddListeners/UserHeaderHtmlId/clickFunc/ui/logoutSuccess/index.js";

const applyMenuFromCookie = () => {
    const token = getTokenFromCookie();
    console.log("token---------- : ", token);

    if (!token) {
        handleLogoutSuccess();
        return;
    };

    showUserMenu();
    hideLoginMenu();
    updateUserHeader();
};

export default applyMenuFromCookie;
