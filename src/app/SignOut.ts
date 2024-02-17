import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

export const signOutUser = () => {
    try {
        signOut(auth)
    } catch(error : any) {
        console.error(`error code : ${error.code} , error message : ${error.message}`)
    }
}