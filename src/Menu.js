import React, { useState } from 'react'
import './Menu.css'

function Menu() {

    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
    setActive(!isActive);
    };

    return (
        <a
            className={isActive ? 'close': 'menu'}
            onClick={toggleClass}
        >
        </a>
    )
}

export default Menu
