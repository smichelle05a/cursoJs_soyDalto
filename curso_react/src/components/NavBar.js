import React from 'react'
import cls from '../assets/css/NavBar.module.css'

function NavBar() {
    return (
        <header>
            <nav className={cls.topBar}>
                <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="amazon logo" width="100" />
            </nav>
        </header>
    )
}

export default NavBar