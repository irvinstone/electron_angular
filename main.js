const {
    app, BrowserWindow
} = require('electron')

const db = require('./database/models/index');


let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    })


    // db.User.findAll({}).then(function (result) {
    //   console.log("success:", result)
    //     // return callback(null, new message(200,null,null,result));
    // }).catch(function (err) {
    //     // return callback(new message("1001","app",err.message,err));
    //     console.log("failed:", err)
    // })

    // console.log(db.User);


    mainWindow.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
}


  
  app.on('closed', function () {
    win = null
  })

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  
  // In this file you can include the rest of your app's specific main process
  // code. Tu también puedes ponerlos en archivos separados y requerirlos aquí.
  
  
  // preload.js
  
  // All the Node.js APIs are available in the preload process.
  // It has the same sandbox as a Chrome extension.
//   window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//       const element = document.getElementById(selector)
//       if (element) element.innerText = text
//     }
  
//     for (const dependency of ['chrome', 'node', 'electron']) {
//       replaceText(`${dependency}-version`, process.versions[dependency])
//     }
//   })