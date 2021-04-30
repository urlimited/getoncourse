import React, {useEffect, useState} from 'react';
import "./require.css";

const Editor__dropdownCommands = ({initCommands, initPosition, initIsVisible, createNewBlockHandler, clearCommandHandler}) => {

    const [dropdownBlock, setDropdownBlock] = useState();
    const [isVisible, setIsVisible] = useState(initIsVisible);

    const marginX = 5;
    const marginY = 20;

    useEffect(() => {
        setIsVisible(initIsVisible)
    }, [initIsVisible]);

    return (<>
        {isVisible
            ? <div className="editor__dropdown-commands-block" ref={ref => setDropdownBlock(ref)}
                   style={{position: 'absolute', top: (initPosition.y - (dropdownBlock?.offsetHeight ?? 0) - marginY), left: (initPosition.x + marginX)}}>
                <div className="editor__dropdown-commands-block-header">Blocks</div>
                {initCommands.map((c, k) => (
                    <div className="editor__dropdown-commands-block-item"
                         key={'command-' + k}>
                        <button
                            className="editor__dropdown-commands-block-command-button"
                            onClick={e => {
                                createNewBlockHandler(c.command);
                                clearCommandHandler();
                                setIsVisible(false);
                            }}
                        >{c.label}</button>
                    </div>
                ))}
            </div>
            : <></>}
    </>)
}

export default Editor__dropdownCommands
