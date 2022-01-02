import { TASK_ADDED ,TASK_REMOVED } from './actionType';

export function taskAdded({id,description,status}){
    
        return{
            type:TASK_ADDED,
            payload:{
                    id:id,
                    description:description,
                    status:status,
                }
        }
}


export function taskDeleted(id){
    
    return{
        type:TASK_REMOVED,
        payload:{
                id:id    
            }
    }
}