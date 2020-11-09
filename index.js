const redux = require('redux')
const createStore = redux.createStore

// action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'

// action creator
function buyCake() {
    return {
        type: BUY_CAKE,
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    }
}

// application state has to be represented by single object
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

// Reducer:  takes  prevState and action as arguments and returns new state
// initially : returns initial state by default when applcation starts
// then for later calls, returns (prevState, action) => newState

const reducer = ((state= initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state;
    }
})

// redux store holds application state
const store = createStore(reducer);

// access state via getState()
console.log("initial sate: ", store.getState());

// allow the app to subscribe changes in the store
const unsubscripe = store.subscribe(() => console.log("Updated state: ", store.getState()) );

//dispatch actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscripe();

// run node index.js in terminal


