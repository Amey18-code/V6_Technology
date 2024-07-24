import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "./services";

const getAllDriver = createAsyncThunk("GETALLDRIVERS", async (formData, thunkApi) => {
    try {
        return await services.getAllDriver()
    } catch (error) {
        let message = error.response ? error.response.statusText : error.message;
        return thunkApi.rejectWithValue(message);
    }
})
const getAllUsers = createAsyncThunk("GETALLUSERS", async (formData, thunkApi) => {
    try {
        return await services.getAllUsers()
    } catch (error) {
        let message = error.response ? error.response.statusText : error.message;
        return thunkApi.rejectWithValue(message);
    }
})


const reducerFunction = {
    getAllDriver,
    getAllUsers
}

export default reducerFunction