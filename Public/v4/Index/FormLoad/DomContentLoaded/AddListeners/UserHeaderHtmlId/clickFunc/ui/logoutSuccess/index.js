import hideUserMenu from "./hideUserMenu.js";
import resetUserHeader from "./resetUserHeader.js";
import showLoginMenu from "./showLoginMenu.js";

const handleLogoutSuccess = () => {
    hideUserMenu();
    showLoginMenu();
    resetUserHeader();
};

export default handleLogoutSuccess;
