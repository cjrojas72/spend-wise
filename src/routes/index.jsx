import * as React from 'react'
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"

export default function IndexPage() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  console.log('test', userId)

  React.useEffect(() => {
      if (isLoaded && !userId) {
          navigate("/sign-in")
      }
      if( isLoaded && userId){
          navigate("/dashboard")
      }
  }, [isLoaded])

  if (!isLoaded) return "Loading..."

  return (
    <>
    </>
  )
}


