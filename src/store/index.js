import {configureStore} from "@reduxjs/toolkit";
import onlineTestsSlice from "./mainScreenStore/onlineTestsSlice";
import testConstructorSlice from "./testConstructorStore/testConstructorSlice";

export default configureStore({
    reducer: {
        onlineTestsStore: onlineTestsSlice,
        testConstructorStore: testConstructorSlice,

    }
})