import React,{useState}from 'react';
import {useDispatch} from 'react-redux'
import { updatedTask } from '../actions/todo';

function TodoItem(props) {
    
    const [editting,setEditting] = useState(false);
    const [editedTask,seteditedTask] = useState({
        task:''
    });
    const dispatch = useDispatch();
   
    function handleChange(e){
        seteditedTask({
            task:e.target.value,
            status:false
        })
        
    }

    function toggleEdit(id){
        
    

        dispatch(updatedTask(id,editedTask));
        
        setEditting(!editting);

         
        // if(editting){
        // //     // dispatch save action
        // //     dispatch()



        // }else{
        // // //     //dispatch update action 
        // // //      dispatch(updateTask(id))

        // }

    }

    return (        
        
        <li  id ={"hey",props.id}  className="list-group-item">
                    {/* {props.key} */}
                    
                    <div>
                    {props.task.task}
                    <input type= "button" className ="btn btn-danger" value= "dalete" onClick={() => props.handleDelete(props.task.id)}
                    ></input>

                    <input type= "button" className="btn btn-success" value={editting ? 'save' : 'update'} onClick={() => toggleEdit(props.task.id)}></input> 

                    {editting ?   <input type= "text" name="edit-task" value={editedTask.task} onChange={handleChange}></input> : null  } 

                    </div>
                   

                    </li>




            
    )
}

export default TodoItem
