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
    toast.success('Books Added To Read List')
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
        return toast.warn('You have already read this book')
    }
    storedList.push(book);
    localStorage.setItem('wish books',JSON.stringify(storedList))
    toast.success('Book Added wish List')
}




