import React from 'react';
import classes from "./Footer.module.css";
import logo from '../../img/logo.png';

const Footer = () => {
    return (
        <div className={classes.positioning}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <div className={classes.logo}>
                        <a href="/">
                            <img src={logo} alt="Logo"/>
                        </a>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.infoTheme}>
                            <a href="">О компании</a>
                            <a href="">О проекте</a>
                            <a href="">Обратная связь</a>
                        </div>
                        <div className={classes.infoTheme}>
                            <a href="">Как создать тест</a>
                            <a href="">Правила размещения</a>
                        </div>
                    </div>
                </div>
                <div className={classes.policy}>
                    <a href="">Политика конфиденциальности</a>
                    <a href="">Пользовательское соглашение</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;