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

function send(channel,...args) {
    // 主进程和渲染进程通信需要拿到webContents 然后调用send方法
    win.webContents.send(channel,...args)
}

module.exports = {
    create,
    send
}