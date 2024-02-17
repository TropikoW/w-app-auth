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
        return docRef
    }catch(error : any) {
        console.log(`error code : ${error.code},error message : ${error.message}`)
    }
};