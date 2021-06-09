import React,{useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import {FetchTasks} from '../actions/todo';
import TodoItem from './TodoItem'

function TodoList() {
    const dispatch = useDispatch();

    const {tasks} = useSelector(({tasksReducer}) => ({
        tasks: tasksReducer.tasks,
      }));

    useEffect(()=>{
        dispatch(FetchTasks());
    },[])

 

    return (
        <div className = "container">
            <ul className="list-group">
            {tasks.map((task,index) => (
                
                 <TodoItem task={task}  id={task.id} key= {task.id}/>
      ))}
    </ul>


        </div>
    )
}

export default TodoList








