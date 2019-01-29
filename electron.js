const {app, BrowserWindow}=require('electron')

let window

function createWindow(){
    window= new BrowserWindow({width:900, height:900})


    window.loadFile('index.html')
    window.webContents.openDevTools()

    window.on('closed', ()=>{
        window=null
    })
}
app.on('ready', createWindow)

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{
    if (win===null){
        createWindow()
    }
})