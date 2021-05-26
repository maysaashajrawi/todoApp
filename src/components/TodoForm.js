import React,{useEffect,useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {addTask} from "../actions/todo";
// import uuid from 'react-uuid';


function TodoForm(){
    const dispatch = useDispatch()
    const [newtask,setNewTask] = useState("");
    const {tasks} = useSelector(({tasksReducer}) => ({
        tasks: tasksReducer.tasks,

      }));
      
    function handleChange(e){
        setNewTask(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();        
        dispatch(addTask({task:newtask,status:false}));
    


    }


    // useEffect(()=>{
    //   handleSubmit();
    // },[])

    return (
            
        <div>
            <form  >
                 <div class="form-group"></div>
                <label>
                    Task:
                    <input type="text" name="task"  onChange ={handleChange} value={newtask}/>
                </label>
                <input type="button" value="Add Task" onClick={handleSubmit} className ="btn btn-primary"/>
            </form>
        </div>


            
        );
}

export default TodoForm
