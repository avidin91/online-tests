import React from 'react';
import classes from "./OnlineTests.module.css";
import CatalogueItem from "../Catalogue-item/Catalogue-item";
import {useSelector} from "react-redux";


const OnlineTests = () => {
    const onlineTestsState = useSelector(store => store.onlineTestsStore)

    return (
        <div className={classes.main}>
            <div className={classes.title}>
                <p>
                    Онлайн-тесты
                </p>
            </div>
            <div className={classes.options}>
                <div className={classes.buttonOption}>
                    <p>Тесты по 1С</p>

                </div>
                <div className={classes.buttonOption}>
                    <p>Тесты по Яндекс Директ</p>
                </div>
                <div className={classes.buttonOption}>
                    <p>Тесты по JavaScript</p>
                </div>
                <div className={classes.buttonOption}>
                    <p>Тесты по Английскому языку</p>
                </div>
            </div>
            <div className={classes.content}>
                {onlineTestsState.map((item, index) =>
                    <CatalogueItem item={item} key={index}/>
                )}
            </div>

        </div>
    );
};

export default OnlineTests;