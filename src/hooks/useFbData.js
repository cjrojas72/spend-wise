import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { config } from "../../config/firebase";

import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

// Initialize Firebase app with the provided configuration
const app = initializeApp(config);
const db = getFirestore(app);

// Custom hook to fetch details from Firebase Firestore
export const useDetails = () => {

    const [expenses, setExpenses] = useState([]);
    const [budgets, setBudgets] = useState([]);
    const [error, setError] = useState(null);

    const { getToken } = useAuth();  // Clerk authentication hook
        // Firestore database instance
    const auth = getAuth(app);       // Firebase authentication instance

    

    function convertDatesToISO(objects) {
        return objects.map(item => {
            const seconds = item.date.seconds || 0;
            const nanoseconds = item.date.nanoseconds || 0;
            const milliseconds = seconds * 1000 + nanoseconds / 1000000;
            const date = new Date(milliseconds);
            const formattedDate = date.toISOString().split('T')[0];
            
            return {
                ...item,
                date: formattedDate
            };
        });
    }
    
    useEffect(() => {
        // Function to retrieve details from Firestore
        const retrieveDetails = async function () {
            try {
                // Get the Firebase token from Clerk authentication
                // console.log("Sign in with clerk");
                const firebaseToken = await getToken({ template: "integration_firebase" });

                if (firebaseToken) {
                    // Sign in to Firebase using the custom token
                    const userCredentials = await signInWithCustomToken(auth, firebaseToken || "");

                    console.log("I connected");

                    //console.log("User:", userCredentials.user);

                    // Fetch details from the "expenses" collection in Firestore
                    const expensesCol = await collection(db, "expenses");
                    const expensesSnapshot= await getDocs(expensesCol);
                    let expensesLst = expensesSnapshot.docs.map( doc => doc.data());
                    expensesLst = convertDatesToISO(expensesLst);

                    
                    setExpenses(expensesLst);

                    //console.log('before state: ', expensesLst);

                    // Fetch details from the "budgets" collection in Firestore
                    const budgetsCol = await collection(db, "budgets");
                    const budgetsSnapshot= await getDocs(budgetsCol);
                    let budgetsLst = budgetsSnapshot.docs.map( doc => doc.data());
                    budgetsLst = convertDatesToISO(expensesLst);

                    setBudgets(budgetsLst);

                }
                
            } catch (err) {
                // Handle any errors that occur during the retrieval process
                setError(err);
                console.log(err);
            };
        }

        // Call the retrieveDetails function when the component mounts
        retrieveDetails();
    }, []);

    // Return the fetched details and error state
    return { expenses, budgets, error };
}


export { db, app}