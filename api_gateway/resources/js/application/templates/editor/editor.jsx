import React, {useState, useEffect} from 'react'
import Editor__dropdownCommands from "./__dropdownCommands/editor__dropdownCommands";

const Editor = ({}) => {
    const [dropdownCommandsConfigs, setDropdownCommandsConfigs] = useState({
        commands: [],
        isVisible: false
    });

    const [blocks, setBlocks] = useState();

    useEffect(() => {
        setDropdownCommandsConfigs({
            commands: ['text', 'header', 'image'],
            //isVisible:
        });
    }, []);

    return (<>
        <h3>editor</h3>
        {
            blocks.map(b => (b.render()))
        }
        <Editor__dropdownCommands configs={dropdownCommandsConfigs} />
    </>)
}

export default Editor
