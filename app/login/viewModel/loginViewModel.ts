import { auth } from "@/app/config";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { ResponseType } from "./../.././../components/types/ResponseType";

export const loginWithEmail = async (email: string, password: string): Promise<ResponseType<UserCredential>> => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    if (!result) {
        console.error("Signup error", result);
        return {
            isSuccessful: false,
            status: 500,
            data: null,
            error: "An error occurred while creating the user account."
        };
    }
    return {
        isSuccessful: true,
        status: 200,
        data: result,
        error: null
    };
}