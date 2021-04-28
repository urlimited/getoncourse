import React, {useEffect, useState} from 'react';
import "./require.css";

const Editor__dropdownCommands = ({commands, position, createNewBlockHandler}) => {

    const [dropdownBlock, setDropdownBlock] = useState(<div />);

    useEffect(() => {
        console.log(position);
    }, [position]);

    useEffect(() => {
        console.log(dropdownBlock);
    }, [dropdownBlock]);

    const marginX = 5;
    const marginY = 200;

    return (<>
        <div className="editor__dropdown-commands-block" ref={ref => setDropdownBlock(ref)}
             style={{position: 'absolute', top: (position.y -/* dropdownBlock.height -*/ marginY), left: (position.x + marginX)}}>
            <div className="editor__dropdown-commands-block-header">Blocks</div>
            {commands.map((c, k) => (
                <div className="editor__dropdown-commands-block-item"
                     key={'command-' + k}>
                    <button
                        className="editor__dropdown-commands-block-command-button"
                        onClick={e => {
                            createNewBlockHandler(c.command);
                        }}
                    >{c.label}</button>
                </div>
            ))}
        </div>

    </>)
}

export default Editor__dropdownCommands
