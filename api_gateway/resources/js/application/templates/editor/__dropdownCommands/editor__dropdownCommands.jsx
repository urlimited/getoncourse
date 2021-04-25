import React, {useEffect} from 'react';
import "./require.css";

const Editor__dropdownCommands = ({commands, position}) => {

    return (<>
        <div className="editor__dropdown-commands-block"
             style={{position: 'absolute', top: position.y, left: position.x}}>
            <div className="editor__dropdown-commands-block-header">Blocks</div>
            {commands.map((c, k) => (
                <div className="editor__dropdown-commands-block-item"
                     key={'command-' + k}>
                    {c}
                </div>
            ))}
        </div>

    </>)
}

export default Editor__dropdownCommands
