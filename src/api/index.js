
import axios from 'axios';
const url = "http://localhost:3000";
    
export const fetchTasks = ()=>axios.get(url+'/tasks');





