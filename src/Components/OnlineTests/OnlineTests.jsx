import React from 'react';
import classes from "./OnlineTests.module.css";
import CatalogueItem from "../Catalogue-item/Catalogue-item";
import logo from '../../img/logos-for-tests/orig.png';

const object = [
    {
        title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 'free',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
    },
    {
        title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 'free',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
    },
    {
        title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 1200,
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
    },
    {
        title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 'free',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
    },
    {
        title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 'free',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
    },
    {
        title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 500,
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
    },
]

const OnlineTests = () => {
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
                {object.map((item, index) =>
                    <CatalogueItem item={item} key={index}/>
                )}
            </div>

        </div>
    );
};

export default OnlineTests;