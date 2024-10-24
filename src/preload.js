// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require("electron/renderer");
const { app, BrowserWindow } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld("myAPI", {
  openNewTable: (table) => ipcRenderer.send("open-new-table", table),
  parseCSV: () => ipcRenderer.invoke("parseCSV"),
  writeCSV: (data) => ipcRenderer.send("writeCSV", data),
});
