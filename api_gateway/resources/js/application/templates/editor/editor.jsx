import React, {useState, useEffect} from 'react'
import Editor__dropdownCommands from "./__dropdownCommands/editor__dropdownCommands";
import Editor__textBlock from "./__textBlock/editor__textBlock";

const Editor = ({}) => {
    const [dropdownCommandsConfigs, setDropdownCommandsConfigs] = useState({});

    const [deleteElementEventId, setDeleteElementEventId] = useState(0);
    const [showDropdownEvent, setShowDropdownEvent] = useState(false);

    const [blocks, setBlocks] = useState([
        <Editor__textBlock key={'block-1'} id={'block-1'} deleteHandler={id => setDeleteElementEventId(id)}
                           setDropdownCommandsConfigsHandler={configs => setDropdownCommandsConfigs(configs)}/>,
        <Editor__textBlock key={'block-2'} id={'block-2'} deleteHandler={id => setDeleteElementEventId(id)}
                           setDropdownCommandsConfigsHandler={configs => setDropdownCommandsConfigs(configs)}/>,
        <Editor__textBlock key={'block-3'} id={'block-3'} deleteHandler={id => setDeleteElementEventId(id)}
                           setDropdownCommandsConfigsHandler={configs => setDropdownCommandsConfigs(configs)}/>
    ]);

    useEffect(() => {
        setBlocks(blocks.filter(b => {
            return b.props.id !== deleteElementEventId
        }));
    }, [deleteElementEventId]);


    return (<>
        <h3>Editor</h3>
        {
            blocks
        }
        <Editor__dropdownCommands configs={dropdownCommandsConfigs}/>
    </>)
}

export default Editor
