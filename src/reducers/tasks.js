import {FETCH_TASKS_LOADING,FETCH_TASKS_SUCCESS,FETCH_TASKS_FAIL} from "../actions/todo";
import TodoItem from "../components/TodoItem";

const initialState = {
    tasks : [],
    error:'',
    loading:false,
    task:{}
}
const tasksReducer=(state = initialState,action)=>{


    switch(action.type){
        case FETCH_TASKS_LOADING:
            return {
                ...state,
                loading:true
            }

        case FETCH_TASKS_SUCCESS:
            return{
                ...state,
                tasks:action?.payload
            }
        case FETCH_TASKS_FAIL:
            return {
                ...state,
                error:action.error
            }
        default:
            return state; 
    }

}
export default tasksReducer;