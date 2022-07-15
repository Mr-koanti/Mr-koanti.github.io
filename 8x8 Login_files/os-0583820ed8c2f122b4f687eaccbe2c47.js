const knownOS = {
    Mac: "macOS",
    Win: "Windows",
    Linux: "Linux",
    Android: "Android",
    iPad: "iPad",
    iPhone: "iPhone"
};

const getOS = function () {
    let os = "UnknownOS";
    const osKeys = Object.keys(knownOS);

    for (i = 0; i < osKeys.length; ++i) {
        const key = osKeys[i];

        if (navigator.userAgent.indexOf(key) !== -1) {
            os = knownOS[key];
            break;
        }
    }

    return {name: os, version: "Unknown"};
}