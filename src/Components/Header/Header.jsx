import React from 'react';
import classes from "./Header.module.css";
import logo from '../../img/logo.png';
import SmallButton from "../Buttons/Small-button/SmallButton";
import Logo from "../Logo/Logo";
import EnterButton from "../Buttons/Enter-button/EnterButton";

const Header = () => {
    return (
        <div className={classes.head}>
                <a href="/">
                    <img src={logo} alt="Logo"/>
                </a>
                <div className={classes.descriptor}>
                    <div className={classes.descriptorP}>
                        <p>Конструктор тестов и опросов для самостоятельной подготовки</p>
                    </div>
                    <div className={classes.buttonWrapper}>
                        <SmallButton text={'Каталог'}/>
                        <SmallButton text={'Создать тест'} link={'/tests-constructor'}/>
                    </div>
                </div>
                <Logo text={'TESTCUBE'}/>
            <div className={classes.align}>
                <EnterButton text={'Вход'}/>
                <EnterButton text={'Регистрация'}/>
            </div>
        </div>
    );
};

export default Header;