import { ReactNode } from "react"

function AuthPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-900 to-purple-300">
        {children}
    </div>
  )
}

export default AuthPage