import React from 'react'

const Editor__dropdownCommands = ({configs}) => {

    return (<>
        {configs.isVisible
            ? <>
                <div>Blocks</div>
                {configs.commands.map((c, k) => (<div key={'command-' + k}>
                    {c}
                </div>))}
            </>
            : <></>}

    </>)
}

export default Editor__dropdownCommands
