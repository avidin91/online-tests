import {createSlice} from "@reduxjs/toolkit";
import logo from "../../img/logos-for-tests/orig.png";

const onlineTests = createSlice({
    name: 'mainScreenState',
    initialState: [
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
    ],
    reducers: {},
})

export default onlineTests.reducer;