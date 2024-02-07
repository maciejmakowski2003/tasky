import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthPage from "./components/AuthComponents/AuthPage"
import LoginCard from "./components/AuthComponents/LoginCard"
import SignUpCard from "./components/AuthComponents/SignUpCard";
import Home from "./components/MainPageComponents/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="login" element={
          <AuthPage>
            <LoginCard />
          </AuthPage>
        } />

        <Route path="signup" element={
          <AuthPage>
              <SignUpCard />
          </AuthPage>
        } />

        <Route path="*" element={
          <div>
            <Home />
          </div>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
