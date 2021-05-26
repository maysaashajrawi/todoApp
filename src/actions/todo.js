import {fetchTasks,addNewTask,deletedTask,updateTask} from "../api/index";
export const FETCH_TASKS_LOADING = "FETCH_TASKS_LOADING";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAIL = "FETCH_TASKS_FAIL";

export const FETCH_ONE_TASK = "FETCH_ONE_TASK";

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

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


export const addTask=(data)=>async(dispatch)=>{
    try{
        const res = await addNewTask(data);
        dispatch({
            type: ADD_TASK,
            payload :res.data
        });
               
    }catch(error){
        console.log(error)
    }
   
}

export const deleteTask = (id) => async (dispatch,getState)=>{

    // getState to get data from store directly, Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.
    const res = await deletedTask(id);
    const oldTask = getState().tasksReducer.tasks;
    
    const deletedID = id;
    // console.log(id)
    //filter it will give me new array
    //filter will return all tasks expect the deleted task


    const newTasks = oldTask.filter(tasks=>tasks.id !== deletedID ) 
    dispatch({
        type:"DELETE_TASK",
        payload : newTasks

    })
}


export const updatedTask = (id,update) => async (dispatch,getState)=>{
    try{   
        const {data} = await updateTask(id,update);
                dispatch({
                    type:UPDATE_TASK,
                    payload:data
                })
    }catch(err){
            console.log(err);
    }
    };


    
    export const fetchOneTask = (id)=>async (dispatch)=>{
    
        try{
            //for success 
            const res = await fetchOneTask(id);
    
    
            dispatch({
                type: FETCH_ONE_TASK,
                payload: res.data
            });
            
    
        }
        catch(error){
            console.log(error);
        }
    }
       
