import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
// Supabase
import { createClient } from '@supabase/supabase-js'

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

// const firebaseCValues = JSON.stringify(process.env.NEXT_PUBLIC_FIREBASE || {});
const firebaseEnvString = process.env.NEXT_PUBLIC_FIREBASE_STRING as string;
const myEnvArray = firebaseEnvString.split("|");
const firebaseConfig = {
  apiKey: myEnvArray[0],
  authDomain: myEnvArray[1],
  projectId: myEnvArray[2],
  storageBucket: myEnvArray[3],
  messagingSenderId: myEnvArray[4],
  appId: myEnvArray[5],
  measurementId: myEnvArray[6]
};

// Initialize Firebase
// export const app = initializeApp(firebaseCValues as unknown as object);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

// Supabse Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
if (!supabaseKey) {
  throw new Error("Missing Supabase key");
};
if (!supabaseUrl) {
  throw new Error("Missing supabaseUrl");
}
export const supabase = createClient(supabaseUrl, supabaseKey);