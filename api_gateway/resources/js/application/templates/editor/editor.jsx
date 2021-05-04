import React, {useState, useEffect} from 'react'
import {EditorModel} from "./models/editor.model.tsx";

const Editor = ({blocksLoaded, apiSaveOnServer, editorSalt}) => {

    useEffect(() => {
        editor.setBlocks(blocksLoaded);
    }, [blocksLoaded]);

    const [editor, setEditor] = useState(new EditorModel({
        render: (value) => setEditor(value),
        editorSalt
    }));

    return (<>
        <h3>Editor</h3>
        <div className="editorArea">{editor.renderBlocks()}</div>
        <div>
            <button className="" onClick={e => editor.apiSaveOnServer(apiSaveOnServer)}>Save</button>
        </div>
        {editor.renderCommandsDropdown()}
    </>);
}

export default Editor
