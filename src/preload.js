// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    sendInputData: (data) => ipcRenderer.send('input-data', data),
    onProcessedData: (callback) => ipcRenderer.on('processed-data', (event, data) => callback(data)),
});