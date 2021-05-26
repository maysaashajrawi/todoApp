
import axios from 'axios';
const url = "http://localhost:3000";
    
export const fetchTasks = ()=>axios.get(url+'/tasks');

export const fetchOneTask = (id)=>axios.get(url+'/tasks'+id);

export const addNewTask = (data)=>axios.post(url+'/tasks', data);
export const deletedTask = (id)=>axios.delete(url+'/tasks/'+id);

export const updateTask = (id,data)=>axios.put(url+'/tasks/'+id , data);



