import React from 'react';
import './loader.css';

const Loader = () => {
    return (
        <>
            <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <div className="loader text">
                Подгружаем данные
            </div>
        </>
    )
}

export default Loader;
