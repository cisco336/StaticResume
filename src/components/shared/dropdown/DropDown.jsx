import React, { useState } from 'react';
import './drop-down.scss';

function DropDown({
    text = 'Drop down',
    icon = 'fa-solid fa-caret-down',
    items = [],
    callback = null
}) {
    const [showMenu, setShowMenu] = useState(false);
    const handleCallback = (e, value) => {
        e.preventDefault(e);
        if (typeof callback === 'function') {
            callback(e, value);
        }
        setShowMenu(!showMenu);
    };
    return (
        <div className="drop-down">
            <button onClick={() => setShowMenu(!showMenu)}>
                {text} <i className={icon}></i>
            </button>
            {showMenu && (
                <div className="drop-down__menu">
                    {items.map((item, i) => (
                        <button
                            key={i}
                            onClick={(e) => handleCallback(e, item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDown;
