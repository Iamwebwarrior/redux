

export function reducer(state=[],action)
{ 
    if(action.type==="taskdded"){
        return[
                ...state,
                {
                    id:action.payload.id,
                    description:action.payload.description,
                    status:action.payload.status,
                }
            ]
 
    }else if(action.type==="taskRemoved"){
    return state.filter(item=>item.id!==action.payload.id)
    }else{
      return state,
    }

}  

