// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("myAPI", {
    selectFolder: () => ipcRenderer.invoke("dialog:openDirectory"),
});


// Now you can call the selectFolder method from your application code and get the user input.

// window.myAPI.selectFolder().then(result=>{/* Do something with the folder path*/})

