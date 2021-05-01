import React, {useState, useEffect} from 'react'
import {EditorModel} from "./models/editor.model.tsx";
import {EditorTextBlockModel} from "./models/editorTextBlock.model.tsx";

const Editor = ({blocksLoaded, apiSaveOnServer}) => {
    const [editor, setEditor] = useState(new EditorModel({
        blocks: [
            new EditorTextBlockModel({key: "text-" + (+new Date())})
        ],
        render: (value) => setEditor(value)
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
