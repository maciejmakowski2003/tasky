import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthPage from "./components/AuthComponents/AuthPage"
import LoginCard from "./components/AuthComponents/LoginCard"
import SignUpCard from "./components/AuthComponents/SignUpCard";
import NavbBar from "./components/MainPageComponents/NavbBar";

function App() {
  return (
    <BrowserRouter basename="/tasky">
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

        <Route path="*" element={<NavbBar />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
