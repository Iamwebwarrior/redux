import { createAction,createSlice } from "@reduxjs/toolkit";

export const taskadded = createAction("taskadded");
export const taskdeleted = createAction("taskdeleted");


//slice
const slice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push({
                id:action.payload.id,
                name:action.payload.desc,
                
            })
        },
        removefromcart:(state,action)=>{
            return state.filter(item=>item.id!==action.payload.id)
        }
    }
})
//reducer

export const { addtocart,removefromcart} = slice.actions
console.log(slice)
