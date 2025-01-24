import { auth } from "@/app/config";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export const loginWithEmail = async (email: string, password: string): Promise<UserCredential> => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
}