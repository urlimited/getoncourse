import React, {useState, useEffect} from 'react'
import Editor__dropdownCommands from "./__dropdownCommands/editor__dropdownCommands";
import Editor__textBlock from "./__textBlock/editor__textBlock";

const Editor = ({}) => {
    const [dropdownCommandsConfigs, setDropdownCommandsConfigs] = useState({
        commands: [],
        isVisible: false
    });

    const [deleteElementEventId, setDeleteElementEventId] = useState(0);

    const [blocks, setBlocks] = useState([
        <Editor__textBlock key={'block-1'} id={'block-1'} deleteHandler={id => setDeleteElementEventId(id)} />,
        <Editor__textBlock key={'block-2'} id={'block-2'} deleteHandler={id => setDeleteElementEventId(id)} />,
        <Editor__textBlock key={'block-3'} id={'block-3'} deleteHandler={id => setDeleteElementEventId(id)} />
    ]);

    useEffect(() => {
        setDropdownCommandsConfigs({
            commands: ['text', 'header', 'image'],
            //isVisible:
        });
    }, []);

    useEffect(() => {
        setBlocks(blocks.filter(b => {
            return b.props.id !== deleteElementEventId
        }));
    }, [deleteElementEventId]);


    return (<>
        <h3>editor</h3>
        {
            blocks
        }
        <Editor__dropdownCommands configs={dropdownCommandsConfigs} />
    </>)
}

export default Editor
