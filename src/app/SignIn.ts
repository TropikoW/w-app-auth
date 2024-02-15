import { signInWithEmailAndPassword } from 'firebase/auth';

export const authentication = async(auth : any,email : string,password : string) =>{
    const credential = await signInWithEmailAndPassword(auth,email,password);
    return credential
}