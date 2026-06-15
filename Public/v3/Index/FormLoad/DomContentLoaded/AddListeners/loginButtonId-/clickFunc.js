const getUserName = () =>
    document.getElementById("Username").value;

const getPassword = () =>
    document.getElementById("Password").value;

const getLoginPayload = () => ({
    UserName: getUserName(),
    Password: getPassword()
});

const postLogin = async () => {
    return fetch("/Secured/V1/GenerateToken/ToCookie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            getLoginPayload()
        )
    });
};

const getTokenFromCookie = () =>
    document.cookie
        .split("; ")
        .find(row => row.startsWith("KSToken="))
        ?.split("=")[1];

const decodeJwt = (token) => {
    const [header, payload] = token.split(".");

    return {
        header: JSON.parse(atob(header)),
        payload: atob(payload)
    };
};

const getUserCode = () => {
    const token = getTokenFromCookie();

    if (!token) return "";

    return decodeJwt(token).payload;
};

const hideLoginModal = () => {
    document
        .getElementById("loginModal")
        .classList.add("hidden");
};

const showLoginError = () => {
    document
        .getElementById("loginError")
        .classList.remove("hidden");

    document
        .getElementById("loginError")
        .textContent = "Invalid username or password";

    document
        .getElementById("loginModalContent")
        .classList.add("border-2", "border-red-500");
};

const hideLoginError = () => {
    document
        .getElementById("loginError")
        .classList.add("hidden");

    document
        .getElementById("loginModalContent")
        .classList.remove("border-2", "border-red-500");
};

const showUserMenu = () => {
    document
        .getElementById("UserHeaderHtmlId")
        .closest("li")
        .style.display = "";
};

const hideLoginMenu = () => {
    document
        .getElementById("loginHeaderHtmlId")
        .closest("li")
        .style.display = "none";
};

const updateUserHeader = () => {
    document
        .getElementById("UserHeaderHtmlId")
        .querySelector("span")
        .textContent = getUserCode();
};

const handleLoginSuccess = () => {
    hideLoginError();
    hideLoginModal();
    showUserMenu();
    hideLoginMenu();
    updateUserHeader();
};

const handleLoginFailure = () => {
    showLoginError();
};

const clickFuncToRun = async () => {
    const response = await postLogin();

    if (response.status === 200) {
        handleLoginSuccess();
        return;
    };

    handleLoginFailure();
};

export { clickFuncToRun };