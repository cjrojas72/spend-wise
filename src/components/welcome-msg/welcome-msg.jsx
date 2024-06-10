"use client";
import { useUser } from "@clerk/clerk-react";

export const WelcomeMsg = () =>{
    const { user, isLoaded } = useUser();

    return(
        <div className="space-y-2 m-10">
            <h2 className="text-2xl lg:text-4xl font medium font-bold">
                Welcome Back {user?.firstName}
            </h2>
            <p>Here is what's happening with your money</p>
        </div>
    )
}