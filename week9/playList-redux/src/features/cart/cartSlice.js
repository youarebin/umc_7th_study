import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../../constants/cartItem';

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        increase: (state, { payload }) => {
            const itemId = payload;
            const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
            item.amount++;
        },
        decrease: (state, { payload }) => {
            const itemId = payload;
            const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
            item.amount--;
        },
        removeItem : (state, { payload }) => {
            const itemId = payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        clearCart : (state) =>{
            state.cartItems = [];
        },
        calculateTotals : (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })

            state.amount = amount;
            state.total = total;
        }
    }
})

export const {increase, decrease, removeItem, clearCart, calculateTotals} = cartSlice.actions
export default cartSlice.reducer