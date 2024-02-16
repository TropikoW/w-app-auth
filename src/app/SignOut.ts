import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

export const signOutUser = () => {
    try {
        signOut(auth)
    } catch(error) {
        console.error(error)
    }
}