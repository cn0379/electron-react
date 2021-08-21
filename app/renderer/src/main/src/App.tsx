import React, { useEffect, useState } from 'react'
import './app.css'
const { ipcRenderer } = window.require('electron')
type propsType = {

}

const App: React.FC<propsType> = (props) => {
    const [remoteCode, setRemoteCode] = useState('')
    const [localCode, setLocalCode] = useState('')
    const [controlText, setControlText] = useState('')
    const login = async () => {
        let code = await ipcRenderer.invoke('login')
        setLocalCode(code)
    }
    useEffect(() => {
        login()
        ipcRenderer.on('control-state-change', handleControlState)
        return () => {
            ipcRenderer.removeListener('control-state-change', handleControlState)
        }
    }, [])

    const handleControlState = (e: Event, name: string, type: number) => {
        let text = ''
        if (type === 1) {
            text = `正在控制远程${name}`
        } else if (type === 2) {
            text = `被${name}控制中`
        }
        setControlText(text)
    }

    const startControl = (remoteCode: string) => {
        ipcRenderer.send('control', remoteCode)
    }
    return (
        <div className='container'>
            {
                controlText === '' ? <>
                    <div>
                        你的控制码{localCode}
                    </div>
                    <input type="text" value={remoteCode} onChange={(e) =>
                        setRemoteCode(e.target.value)
                    } />
                    <button onClick={() => startControl(remoteCode)} >确认</button>
                </> : <div>{controlText}</div>
            }
        </div>
    )
}

export default App;
