import React,{useEffect,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import {FetchTasks,deleteTask,updatedTask, FETCH_TASKS_LOADING} from '../actions/todo';
import TodoItem from './TodoItem'

function TodoList() {
    const dispatch = useDispatch();
    const [editting,setEditting] = useState(false);
    const [editedTask,seteditedTask] = useState({
        task:''
    });
    const {tasks} = useSelector(({tasksReducer}) => ({
        tasks: tasksReducer.tasks,
      }));

     
     
      function handleChange(e){
          seteditedTask({
              task:e.target.value,
              status:false
          })
          
          // dispatch(updateTask(id))
      }
  
      function toggleEdit(id){
          
      
  
          dispatch(updatedTask(id,editedTask));
          // console.log(id)
          setEditting(!editting);
      }
 
      
    
    useEffect(()=>{
        dispatch(FetchTasks());
    },[])

    function handleDelete(id){
        dispatch(deleteTask(id));
    }

 

    return (
        <div className = "container">
            <ul className="list-group">
            {tasks.map((task,index) => (
                
                 <TodoItem task={task} handleDelete={handleDelete} id={task.id} key= {task.id}/>
      ))}
    </ul>


        </div>
    )
}

export default TodoList








