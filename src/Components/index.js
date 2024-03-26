import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getStoredList = () =>{
    const storedList = localStorage.getItem('books');
    if(storedList){
        return JSON.parse(storedList)
    }
    return [];
}

export const saveStoredList = (book) =>{
    const storedList = getStoredList();
    const exists = storedList.find(b => b.id === book.id);
    if(exists){
        return toast.warn('already exist')
    }
    storedList.push(book);
    localStorage.setItem('books',JSON.stringify(storedList))
    toast.success('Add Read books')
}