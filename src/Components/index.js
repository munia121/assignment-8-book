import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getStoredList = () =>{
    const storedList = localStorage.getItem('read books');
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
    localStorage.setItem('read books',JSON.stringify(storedList))
    toast.success('Add Read books')
}






export const getWishList = () =>{
    const storedList = localStorage.getItem('wish books');
    if(storedList){
        return JSON.parse(storedList)
    }
    return [];
}

export const saveWishList = (book) =>{
    const storedList = getWishList();
    const exists = storedList.find(b => b.id === book.id);
    if(exists){
        return toast.warn('already exist')
    }
    storedList.push(book);
    localStorage.setItem('wish books',JSON.stringify(storedList))
    toast.success('Add wish books')
}




