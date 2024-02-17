import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

export const createUser = async (email:string,password:string) => {
    try{
        const credential = await createUserWithEmailAndPassword(auth,email,password)
        return credential
    } catch(error : any) {
        console.log(`error code : ${error.code},error message : ${error.message}`)
    }
}