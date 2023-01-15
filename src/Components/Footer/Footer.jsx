import React from 'react';
import classes from "./Footer.module.css";
import logo from '../../img/logo.png';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className={classes.positioning}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <div className={classes.logo}>
                        <NavLink to="/">
                            <img src={logo} alt="Logo"/>
                        </NavLink>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.infoTheme}>
                            <NavLink to="">О компании</NavLink>
                            <NavLink to="">О проекте</NavLink>
                            <NavLink to="">Обратная связь</NavLink>
                        </div>
                        <div className={classes.infoTheme}>
                            <NavLink to="">Как создать тест</NavLink>
                            <NavLink to="">Правила размещения</NavLink>
                        </div>
                    </div>
                </div>
                <div className={classes.policy}>
                    <NavLink to="">Политика конфиденциальности</NavLink>
                    <NavLink to="">Пользовательское соглашение</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;