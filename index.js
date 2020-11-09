const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

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
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

// split the states
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// Reducer:  takes  prevState and action as arguments and returns new state
// initially : returns initial state by default when applcation starts
// then for later calls, returns (prevState, action) => newState

// const reducer = ((state= initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state;
//     }
// })

// split reducers
const cakeReducer = ((state= initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state;
    }
})

const iceCreamReducer = ((state= initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state;
    }
})

//combine reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// redux store holds application state
const store = createStore(rootReducer, applyMiddleware(logger));

// access state via getState()
console.log("initial sate: ", store.getState());

// allow the app to subscribe changes in the store
const unsubscribe = store.subscribe(() => {} );

//dispatch actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

// run node index.js in terminal


