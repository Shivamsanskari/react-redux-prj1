import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: true};

/*
    Created The Slice using Redux-toolkit

    1 --    import createSlice method 
    2 --    use createSlice Method as Below and set name, initialState and the reducers 
    3 --    Below their i am  creating a new Slice for Authentication
  
*/


// Counter slice for Counter

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});


// Authentication state Slice

const initialAuthState = {
    isAuthenticated: false,
}
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

const store = configureStore({
    reducer: { counter : counterSlice.reducer, auth : authSlice.reducer }
});

export default store;
