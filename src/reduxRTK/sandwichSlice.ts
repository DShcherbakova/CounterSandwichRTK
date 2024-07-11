import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Ingredient = 'bread' | 'cheese' | 'salami' | 'sauce';

const initialState = {
    ingredients: ''
}

const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        addIngredient(state, action: PayloadAction<Ingredient>) {
            state.ingredients = `${state.ingredients} ${action.payload}`
        },
        deleteIngredient(state){
            state.ingredients = '';
        }
    }
})

export const { addIngredient, deleteIngredient } = sandwichSlice.actions;

export default sandwichSlice.reducer;