import { legacy_createStore as createStore} from 'redux';


const initialState = {counter: 0, counterStatus: true}

const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
            counterStatus: state.counterStatus
        };
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            counterStatus: state.counterStatus
        };
    }
    if(action.type === 'increase') {
        return {
            counter: state.counter + action.payload,
            counterStatus: state.counterStatus
        };
    }

    if(action.type === 'togglecounter'){
        return {
            counter: state.counter,
            counterStatus: !state.counterStatus
        }
    }

    return state;
}
const store = createStore(counterReducer);

export default store;
