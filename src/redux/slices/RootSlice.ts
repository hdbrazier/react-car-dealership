import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        name: "Name",
        model: "Model",
        year: "Year",
        price: "Price",
        description: "Description",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseModel, chooseYear, choosePrice, chooseDescription } = rootSlice.actions;