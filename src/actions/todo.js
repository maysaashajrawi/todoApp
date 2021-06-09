import {fetchTasks} from "../api/index";
export const FETCH_TASKS_LOADING = "FETCH_TASKS_LOADING";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAIL = "FETCH_TASKS_FAIL";


export const FetchTasks = ()=>async (dispatch)=>{
    dispatch({
        type: "FETCH_TASKS_LOADING",
    });
    try{
        //for success 
        const res = await fetchTasks();


        dispatch({
            type: "FETCH_TASKS_SUCCESS",
            payload: res.data
        });
        

    }
    catch(error){
        dispatch({
            type: "FETCH_TASKS_FAIL",
            error: error

        });
    }
}

