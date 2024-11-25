import {createSlice} from '@reduxjs/toolkit'

const initialState = [

];

export const cartSlice = createSlice({
    name: 'cartfunction',
    initialState,
    reducers:{
        increase: (state, action) => {
            const item = state.cart.find(e => e.id === action.payload)
            item.amount++
        },
        decrease: (state, action) => {
            const item = state.cart.find(e => e.id === action.payload)
            if(item.amount < 1) {
                removeItem
            } else {
                item.amount--
            }
        },
        removeItem : (state, action) => {
            state.cart = state.cart.filter(e => e.id !== action.payload);
        },
        clearCart : (state) =>{
            state.cart = [];
            state.totalPrice = 0;
            state.totalAmount = 0;
        },
        calculateTotals : (state) => {
            state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.amount, 0);
            state.totalAmount = state.cart.reduce((total, item) => total + item.amount, 0);
        }
    }
})

export const {increase, decrease, removeItem, clearCart, calculateTotals} = cartSlice.actions
export default cartSlice.reducer