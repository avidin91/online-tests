import React from 'react';
import classes from "./WelcomeScreen.module.css";
import MainButton from "../Buttons/MainButton/MainButton";

const WelcomeScreen = () => {
    return (
        <div className={classes.main}>
            <div className={classes.title}>
                <p>
                    Создавайте тесты и опросы или проходите готовые
                </p>
            </div>
            <div className={classes.description}>
                <p>
                    В нашем каталоге представлены тесты и опросы на разные темы, такие как: <br />
                    <br />
                    — подготовка к сдаче экзамена на водительские права; <br />
                    — подготовка к сдаче сертификата 1С профессионал; <br />
                    — проверка знаний в JavaScript. <br />
                    <br />
                    Чтобы ознакомиться с полным списком опросов, перейдите в каталог тестов. <br />
                </p>
            </div>
            <div className={classes.buttonPositioning}>
                <MainButton text={'Каталог тестов'}/>
            </div>
        </div>
    );
};

export default WelcomeScreen;