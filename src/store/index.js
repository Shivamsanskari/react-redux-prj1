import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};

/*
    Created The Slice using Redux-toolkit

    1 --    import createSlice method 
    2 --    use createSlice Method as Below and set name, initialState and the Reducers 
  
*/


const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

const store = configureStore({
    reducer:
});

export default store;
