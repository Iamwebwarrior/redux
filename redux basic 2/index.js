import { store } from "./store"

console.log(store.getState());


store.dispatch({ 
    type: "taskAdded"
    payload:{
        id:1,
        description:"hello there"
        status:"done"
    }
 })

 store.dispatch({ 
    type: "taskAdded"
    payload:{
        id:2,
        description:"hello there 2"
        status:"not done"
    }
 })