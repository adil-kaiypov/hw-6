import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) =>{
            if(!state.items.includes(action.payload)){
                state.items.push(action.payload);
            }
        }
    }
});

export const {addItem} = basketSlice.actions;
export default basketSlice.reducer;