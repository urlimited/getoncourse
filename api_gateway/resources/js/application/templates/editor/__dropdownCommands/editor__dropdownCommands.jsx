import React from 'react'

const Editor__dropdownCommands = ({configs}) => {

    return (<>
        {configs.isVisible
            ? <>
                <div>Blocks</div>
                {configs.commands.map(c => (<div>
                    {c}
                </div>))}
            </>
            : <></>}

    </>)
}

export default Editor__dropdownCommands
