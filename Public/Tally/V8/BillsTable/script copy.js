async function ensureTailwind() {
    if (document.getElementById("KSTableTailwind")) {
        console.log("Tailwind loaded from Firefox Extension");
        return;
    };

    try {
        await loadCss("./tailwind-3.css");

        console.log("Tailwind loaded locally");
        return;
    } catch { }

    try {
        await loadCss(
            "https://keshavsoft.github.io/KsWebExtension/tailwind-3.css"
        );

        console.log("Tailwind loaded from GitHub CDN KsWebExtension");
        return;
    } catch { }

    try {
        await loadCss(
            "https://keshavsoft.github.io/tailwind-gen-css/tailwind-3.css"
        );

        console.log("Tailwind loaded from GitHub CDN tailwind-gen-css");
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

function loadScriptAsModule(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");

        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error(`Failed to load: ${src}`));
        script.type = "module";

        document.head.appendChild(script);
    });
};

async function ensureKSTable() {
    function isKSTableLoaded() {
        return !!window.KSTable;
    };

    async function tryGitHub() {
        try {
            await loadScript("https://keshavsoft.github.io/tailwind-table-dom/Public/v12/kstable.js");

            if (isKSTableLoaded()) {
                console.log("KSTable loaded from GitHub CDN");
                return true;
            };
        } catch { };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/KSTable/v1/entry.js");

            if (fromPromise) return true;

            if (isKSTableLoaded()) {
                console.log("KSTable loaded from Local Server");
                return true;
            };
        } catch { };

        return false;
    };

    if (isKSTableLoaded()) {
        console.log("KSTable loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;

    // if (await tryGitHub()) return;

    throw new Error("KSTable could not be loaded");
};

await ensureTailwind();
await ensureKSTable();