const { contextBridge, shell } = require("electron")

contextBridge.exposeInMainWorld("openInApp", (link, uri) => {
    // spotify handler
    if (uri === 'spotify://') {
        const splits = link.split("/");
        shell.openExternal(`spotify://${splits[3]}/${splits[splits.length - 1]}`);
    } else {
        // other links
        shell.openExternal(uri + link)
    }
})