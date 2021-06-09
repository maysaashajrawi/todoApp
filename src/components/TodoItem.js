import React,{useState}from 'react';
import {useDispatch} from 'react-redux'
import { updatedTask } from '../actions/todo';

function TodoItem(props) {

    const dispatch = useDispatch();
   

    return (        
        
        <li  id ={props.id}  >
                    
                    <div>
                    {props.task.task}
                    </div>
                   

                    </li>




            
    )
}

export default TodoItem
