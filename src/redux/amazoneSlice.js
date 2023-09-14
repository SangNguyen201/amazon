import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    userInfor: [],
};

export const amazonSlice = createSlice({
    name: "amazon",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        resetCart: (state, action) => {
            state.products = [];
        },
        setUserInfor: (state, action) => {
            state.userInfor = action.payload;
        },
        userSignOut: (state, action) => {
            state.userInfor = null;
        },
    },
});

export const { addToCart, deleteItem, resetCart, increaseQuantity, decreaseQuantity, setUserInfor, userSignOut } = amazonSlice.actions;
export default amazonSlice.reducer;
