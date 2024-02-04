import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myReducer } from "./reducer";

const store = configureStore({
    reducer:{
    //    myapi:myApi.reducer,
    //    myReducer:myReducer.reducer,

    //  or (both are same)

    [myApi.reducerPath] : myApi.reducer,
    [myReducer.name]: myReducer.reducer,


    },
    middleware: (mid) => mid().concat(myApi.middleware),
    


})

export default store;