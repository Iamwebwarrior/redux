import { store } from "./store"

console.log(store.getState());


store.dispatch(taskadded({
        id:1,
        description:"hello there",
        status:"done"
    
}))

store.dispatch(taskDeleted(1))

console.log(store.getState());