import { createSlice } from "@reduxjs/toolkit";

// creating a cartSlice
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {

            // mutating the state here/or directly changing

            state.items.push(action.payload);
        }, 
        removeItems: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; 
            // state = []----?
        },
    },
});

export const{ addItem, removeItems, clearCart } = cartSlice.actions; 

export default cartSlice.reducer;