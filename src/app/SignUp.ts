import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

export const createUser = async (email:string,password:string) => {
    try{
        const credential = await createUserWithEmailAndPassword(auth,email,password)
        console.log(credential);
    } catch(error) {
        console.log(error)
    }
}