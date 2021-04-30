import React, {useEffect, useRef, useState} from 'react';
import "./require.css";

const Editor__imageBlock = ({deleteBlockHandler, setHtmlElementHandler, id}) => {
    const [imageSrc, setImageSrc] = useState('');
    const [file, setFile] = useState();

    const [isImageHovered, setIsImageHovered] = useState(false);

    const selfHtmlElement = useRef(null);

    useEffect(() => {
        setHtmlElementHandler(selfHtmlElement.current);
    }, []);

    return (<div className="editor__image-block">
        <div className="editor__image-block-input">
            <input type="file"
                   style={{display: 'none'}}
                   ref={selfHtmlElement}
                   id={"input-file-" + id}
                   onChange={e => {
                       const reader = new FileReader();

                       reader.onload = e => setImageSrc(e.target.result);

                       setFile(e.target.files[0]);

                       reader.readAsDataURL(e.target.files[0]);
                   }}/>
        </div>
        <div className="editor__image-block-preview"
             onMouseEnter={() => setIsImageHovered(true)}
             onMouseLeave={() => setIsImageHovered(false)}>
            {
                file
                    ? <img src={imageSrc} alt="The image" className="editor__image-block-preview-image"/>
                    : <div className="editor__image-placeholder">
                        {isImageHovered
                            ? ""
                            : "Выберите изображение"
                        }</div>
            }
            {isImageHovered
                ? <div className="editor__image-block-preview-actions">
                    <button className="editor__image-block-preview-actions-delete"
                            onClick={e => deleteBlockHandler()}>
                        Del
                    </button>
                    <label htmlFor={"input-file-" + id} className="editor__image-block-preview-actions-update"
                           onClick={e => console.log('changed')}>Upd
                    </label>
                </div>
                : <></>}
        </div>
    </div>)
}

export default Editor__imageBlock
