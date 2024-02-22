import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginCard from "../AuthComponents/LoginCard"
import SignUpCard from "../AuthComponents/SignUpCard";
import AuthPage from "../AuthComponents/AuthPage";

interface ProtectedProps {
    children: ReactNode;
    email: string | null | undefined;
    
}

function Protected({ children, email }: ProtectedProps) {
    if (!email) {
        return (
            <BrowserRouter>
                <Routes>

                <Route path="signup" element={
                    <AuthPage>
                        <SignUpCard />
                    </AuthPage>
                } />

                <Route path="*" element={
                    <AuthPage>
                        <LoginCard />
                    </AuthPage>
                } />

                </Routes>
            </ BrowserRouter>
        )
    }
    return children
}

export default Protected