import { SignIn } from "@clerk/clerk-react"
import { ClerkLoaded,ClerkLoading } from "@clerk/clerk-react";


export default function SignInPage() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full lg:flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-4xl mb-10">Sign In</h1>
                    <div className="flex items-center justify-center">
                        <ClerkLoaded>
                            <SignIn path="/sign-in"/>
                        </ClerkLoaded>
                        <ClerkLoading>
                            <p>Loading...</p>
                        </ClerkLoading>
                    </div>
                </div>
            </div>
            <div className="h-full bg-gradient-to-r from-blue-950 to-blue-500 hidden lg:flex items-center justify-center">
                <img src="/logoipsum-254.svg" height={400} width={400} alt="Logo" />
            </div>
        </div>
    </>
  );
}