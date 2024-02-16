import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

export const addNewUsers = async(userName:string,userLastname : string,userNickname:string,userEmail:string,userPassword:string) =>  {
    try{
        const docRef = await addDoc(collection(db,"users"),{
            username : userName,
            lastname : userLastname,
            nickname : userNickname,
            email : userEmail,
            password : userPassword
        })
        console.log(docRef)
    }catch(error) {
        console.log(error)
    }
};