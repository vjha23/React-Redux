const redux = require('redux');
// which basically used to tell about current state
const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

// for creating stores in redux
const createStore = redux.createStore
// for using multtple reducers
const combineReducers = redux.combineReducers

// define types for actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'

// defining actions which basically returns an object 

function buyCake() {
    return {
        type: BUY_CAKE
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// now defining the initial states
const initialCakeState = {
    numOfCakes: 10
}

const initialIcreamState = {
    numOfIcreamCream: 20
}

// reducer which basically takes prevstate and action and return new state
// all the updation logic is write here

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIcreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcreamCream: state.numOfIcreamCream - 1
        }
        default: return state
    }
}

// now we are combining those reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state ', store.getState())
const unsubscribe = store.subscribe(() => { })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()


