import React, {useEffect, useState} from 'react'

const Editor__textBlock = ({id, deleteHandler, showDropdownHandler}) => {

    const [content, setContent] = useState('');

    return (<div>
        <textarea placeholder={"Type '/' for commands"}
                  onChange={e => {
                      if (e.target.value === '')
                          deleteHandler(id);

                      setContent(e.target.value)
                  }}
                  onKeyPress={e => {
                      if (e.code === "Slash")
                          showDropdownHandler(true);
                  }}
                  onBlur={e => showDropdownHandler(false)}
                  value={content}/>
    </div>)
}

export default Editor__textBlock
