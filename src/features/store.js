import { configureStore } from "@reduxjs/toolkit";
import panelSlice from "./panelSlice";

const store = configureStore({
    reducer: {
        panelSlice,
    }
});

export default store;