import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

export const authentication = async(email : string,password : string) =>{
    try{
        const credential = await signInWithEmailAndPassword(auth,email,password);
        console.log(credential)
    } catch(error) {
        console.error(error)
    }
}