import { legacy_createStore as createStore} from 'redux';

const initialState = {counter: 0, showCounter: true};

const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    if(action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if(action.type === 'togglecounter'){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
}
const store = createStore(counterReducer);

export default store;


/* 
    This is a copy of indexjs file it was previously used as indexjs but this is older version demo of --- How to use Redux '
    
*/