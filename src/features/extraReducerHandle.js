import reducerFunction from "./extraReducersFunction";
const { getAllDriver, getAllUsers } = reducerFunction
export const extraReducers = (builder) => {
    builder.addCase(getAllDriver.pending, (state, action) => {
        return {
            ...state,
            isLoading: true,
            message: ""
        };
    }).addCase(getAllDriver.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            getAllDriver: action.payload,
            isSucces: true,
            message: ""
        };
    }).addCase(getAllDriver.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.payload
        };
    }).addCase(getAllUsers.pending, (state, action) => {
        return {
            ...state,
            isLoading: true,
            message: ""
        };
    }).addCase(getAllUsers.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            getAllUsers: action.payload,
            isSucces: true,
            message: ""
        };
    }).addCase(getAllUsers.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.payload
        };
    })
}