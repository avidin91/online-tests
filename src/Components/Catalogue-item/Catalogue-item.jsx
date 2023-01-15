import React from 'react';
import classes from "./Catalogue-item.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faUser, faComment } from '@fortawesome/free-regular-svg-icons';
import {NavLink} from "react-router-dom";



const CatalogueItem = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.info}>
                <div className={classes.title}>
                    <NavLink to="">{props.item.title}</NavLink>
                </div>
                <div className={classes.author}>
                    <NavLink to="">{props.item.author}</NavLink>
                </div>
                <div  className={classes.items}>
                    <div className={classes.likesQty}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className={classes.donesQty}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={classes.commentsQty}>
                        <FontAwesomeIcon icon={faComment} />
                    </div>
                </div>
                <div className={classes.price}>
                    {props.item.price === "free"? "Бесплатно" : props.item.price + ' ₽'}
                </div>
            </div>
            <div>
                <div className={classes.favorites}>
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={classes.logo}>
                    <img src={props.item.logo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default CatalogueItem;