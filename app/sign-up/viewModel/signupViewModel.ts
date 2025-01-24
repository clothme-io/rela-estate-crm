import { auth } from "@/app/config";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

export const signupWithEmail = async (email: string, password: string): Promise<UserCredential> => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
}