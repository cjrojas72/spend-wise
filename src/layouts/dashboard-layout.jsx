import * as React from 'react'
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"
//import { useDetails } from '../hooks/getFbData'

export default function DashboardLayout() {
    const { userId, isLoaded } = useAuth();
    const navigate = useNavigate();
    

    console.log('User connected: ', userId);

    React.useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/sign-in");
        }
    }, [isLoaded]);

    if (!isLoaded) return "Loading..."

    if(userId){
        
        return (
            <>
                
                <Outlet />
            </>
        )
    }
    
}