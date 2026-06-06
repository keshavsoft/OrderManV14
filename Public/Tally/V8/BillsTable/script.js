async function ensureTailwind() {
    try {
        await loadCss("./tailwind-3.css");

        console.log("Tailwind loaded locally");
        return;
    } catch { }

    try {
        await loadCss(
            "/tailwind-3.css"
        );

        console.log("Tailwind loaded from GitHub CDN");
        return;
    } catch { }

    throw new Error("Tailwind could not be loaded");
};

function loadCss(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement("link");

        link.rel = "stylesheet";
        link.href = href;

        link.onload = resolve;
        link.onerror = reject;

        document.head.appendChild(link);
    });
};

function loadScript(src) {

    return new Promise((resolve, reject) => {
        const script = document.createElement("script");

        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load: ${src}`));

        document.head.appendChild(script);
    });
};

async function ensureKSTable() {
    if (window.KSTable) {
        console.log("KSTable loaded from Firefox Extension");
        return;
    };

    try {
        console.log("before github");
        await loadScript("https://keshavsoft.github.io/tailwind-table-dom/Public/v12/kstable.js");
        console.log("after github");

        if (window.KSTable) {
            console.log("KSTable loaded from GitHub CDN");
            return;
        }
    } catch { }

    try {
        await loadScript("/KSTable/v10.js");

        if (window.KSTable) {
            console.log("KSTable loaded from Local Server");
            return;
        }
    } catch (error) {
        console.error(error);
    };

    throw new Error("KSTable could not be loaded");
};

await ensureTailwind();
await ensureKSTable();