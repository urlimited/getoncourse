import React, {useState, useEffect} from 'react'
import Editor__dropdownCommands from "./__dropdownCommands/editor__dropdownCommands";
import {EditorModel} from "./models/editor.model.tsx";
import {EditorTextBlockModel} from "./models/editorTextBlock.model.tsx";

const Editor = ({blocksLoaded}) => {
    const [dropdownCommandsConfigs, setDropdownCommandsConfigs] = useState({});

    const [editor, setEditor] = useState(new EditorModel({
        blocks: [
            new EditorTextBlockModel()
        ],
        render: (value) => setEditor(value)
    }));

    useEffect(() => {
        console.log(editor);
    }, [editor]);

    /*const [deleteBlockEventId, setDeleteElementEventId] = useState(0);
    const [createBlockEventName, setCreateElementEventBlock] = useState(0);*/

    /*const [blocks, setBlocks] = useState([
        <Editor__textBlock key={'block-1'} id={'block-1'} deleteHandler={id => setDeleteElementEventId(id)}
                           setDropdownCommandsConfigsHandler={configs => setDropdownCommandsConfigs(configs)}/>,
        <Editor__textBlock key={'block-2'} id={'block-2'} deleteHandler={id => setDeleteElementEventId(id)}
                           setDropdownCommandsConfigsHandler={configs => setDropdownCommandsConfigs(configs)}/>,
        <Editor__textBlock key={'block-3'} id={'block-3'} deleteHandler={id => setDeleteElementEventId(id)}
                           setDropdownCommandsConfigsHandler={configs => setDropdownCommandsConfigs(configs)}/>
    ]);*/

   /* useEffect(() => {
        setBlocks(blocks.filter(b => {
            return b.props.id !== deleteBlockEventId
        }));
    }, [deleteBlockEventId]);*/

    /*useEffect(() => {
        setBlocks([...blocks, createBlockEventName]);
    }, [createBlockEventName]);*/

    return (<>
        <h3>Editor</h3>
        <div className="editorArea">{editor.renderBlocks()}</div>
        {editor.renderCommandsDropdown()}
    </>)
}

export default Editor
