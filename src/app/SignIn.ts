import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../utils/firebase'

export const authentication = async(email : string,password : string) => {
    try{
        const credential = await signInWithEmailAndPassword(auth,email,password);
        return credential;
    } catch(error : any) {
        if(error.code) {
            console.error(`error code : ${error.code},error message : ${error.message}`)
        }
    }
}