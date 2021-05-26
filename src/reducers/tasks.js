import {FETCH_TASKS_LOADING,FETCH_TASKS_SUCCESS,FETCH_TASKS_FAIL,ADD_TASK,DELETE_TASK,UPDATE_TASK,FETCH_ONE_TASK} from "../actions/todo";
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
        case ADD_TASK:
            return {
                ...state,
                // add task to tasks array
                tasks:state.tasks.concat(action.payload)
            }

      case DELETE_TASK:
          return{
               ...state,

               tasks:action.payload 
          }
        case UPDATE_TASK:
            return {
                ...state,
                tasks:state.tasks.map((item)=>
                    item.id === action.payload.id ? action.payload : item
                )
            }
        case FETCH_ONE_TASK:
            return {
                ...state,
                tasks:action?.payload
            }

        default:
            return state; 
    }

}
export default tasksReducer;