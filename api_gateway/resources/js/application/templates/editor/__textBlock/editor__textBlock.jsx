import React, {useEffect, useState} from 'react'

const Editor__textBlock = ({id, deleteHandler, showDropdownHandler}) => {

    const [content, setContent] = useState('');

    useEffect(() => {
        if(content === '/')
            showDropdownHandler(true);
    }, [content]);

    return (<div>
        <input contentEditable="true" placeholder={"Type '/' for commands"}
               onChange={e => {
                   if(e.target.value === '')
                       deleteHandler(id);

                   setContent(e.target.value)
               }}
               onBlur={e => showDropdownHandler(false)}
               value={content}/>
    </div>)
}

export default Editor__textBlock
