import React from 'react'

const Editor__dropdownCommands = ({configs}) => {
    const initialConfigs = {
        commands: ['text', 'header', 'image'],
        isVisible: false,
        position: {
            x: 0,
            y: 0
        }
    }

    const mergedConfigs = {
        ...initialConfigs,
        ...configs
    }

    return (<>
        {mergedConfigs.isVisible
            ? <div style={{position: 'absolute', top: mergedConfigs.position.y, left: mergedConfigs.position.x}}>
                <div>Blocks</div>
                {mergedConfigs.commands.map((c, k) => (<div key={'command-' + k}>
                    {c}
                </div>))}
            </div>
            : <></>}

    </>)
}

export default Editor__dropdownCommands
