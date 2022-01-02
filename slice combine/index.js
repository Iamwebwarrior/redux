import configureStore from "./store/configureStore";
import { taskadded,taskDeleted} from "./store/task";
import { addtocart } from "./store/cart";
const store = configureStore();


console.log(store.getState());


store.dispatch(taskadded({
        id:1,
        description:"hello there",
        status:"done"
    
}))

store.dispatch(addtocart({
        id:1,
        name:"hello there"
}))

store.dispatch(taskDeleted(1))

console.log(store.getState());