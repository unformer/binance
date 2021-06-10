import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export const Header = (props) => {

    return <header className={s.header}>
        <div className={s.mainMenu}>            
            <NavLink to={'/glass'} className={s.mainMenu__item} activeClassName={s.active}>Glass</NavLink>
            <NavLink to={'/diff'} className={s.mainMenu__item} activeClassName={s.active}>Diff</NavLink>
        </div>
    </header>
}
