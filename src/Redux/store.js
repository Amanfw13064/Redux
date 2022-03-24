import {combineReducers, createStore} from 'redux'
import { CounterReducer } from './Counter/reducer'
import { TodoReducer } from './Todo/reducer'

const RootReducer=combineReducers({
    counter:CounterReducer,
    todo:TodoReducer,
})

const asyncMiddleware=(store)=>(next)=>(action)=>{
    console.log('Insidesecond')
    next(action)
    console.log("Exiting Secod")
}

export const store=createStore(RootReducer,applyMiddleware(asyncMiddleware,loggerMiddleware))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
