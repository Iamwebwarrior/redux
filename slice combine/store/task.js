import { createAction,createReducer,createSlice } from "@reduxjs/toolkit";

export const taskadded = createAction("taskadded"); //create actions
export const taskdeleted = createAction("taskdeleted");


//slice
const slice = createSlice({
    name:"tasks",  //name of slice
    initialState:[],
    reducers:{
        taskadded:(state,action)=>{
            state.push({
                id:action.payload.id,
                desc:action.payload.desc,
                status:action.payload.status
            })
        },
        taskdeleted:(state,action)=>{
            return state.filter(item=>item.id!==action.payload.id)
        }
    }
})
//reducer


export default slice.reducers  //exporting reducers
export const { taskadded,taskdeleted} = slice.actions  //exportting actions
console.log(slice)
