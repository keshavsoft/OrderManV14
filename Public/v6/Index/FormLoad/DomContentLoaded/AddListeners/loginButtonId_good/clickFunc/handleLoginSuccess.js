import hideLoginError from "./hideLoginError.js";
import hideLoginMenu from "./hideLoginMenu.js";
import hideLoginModal from "./hideLoginModal.js";
import showUserMenu from "./showUserMenu.js";
import updateUserHeader from "./updateUserHeader.js";

const handleLoginSuccess = () => {
    hideLoginError();
    hideLoginModal();
    showUserMenu();
    hideLoginMenu();
    updateUserHeader();
};

export default handleLoginSuccess;
