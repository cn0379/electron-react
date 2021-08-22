const {
    BrowserWindow
} = require('electron')
const path = require('path')
let win

function create() {
    win = new BrowserWindow({
        width: 1000,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false, // 解决本地文件读取
            contextIsolation: false // 解决require错误
        }
    })

    win.loadFile(path.resolve(__dirname, '../../renderer/pages/control/index.html'))
}

module.exports = {
    create
}