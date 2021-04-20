import React, {useState} from 'react'

const Editor__textBlock = ({id, deleteHandler}) => {

    const [content, setContent] = useState('');

    return (<div>
        <input contentEditable="true" placeholder={"Type '/' for commands"}
               onChange={e => {
                   if(e.target.value === '')
                       deleteHandler(id);

                   setContent(e.target.value)
               }}
               value={content}/>
    </div>)
}

export default Editor__textBlock
