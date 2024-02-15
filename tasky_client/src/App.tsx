import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthPage from "./components/AuthComponents/AuthPage"
import LoginCard from "./components/AuthComponents/LoginCard"
import SignUpCard from "./components/AuthComponents/SignUpCard";
import PageContent from "./components/PageComponents/PageContent";
import NavBar from "./components/PageComponents/NavBar";
import Home from "./components/HomeComponents/Home";
import AddTask from "./components/AddingForms/AddTask";
import TasksPage from "./components/TasksComponents/TasksPage";
import CalendarPage from "./components/CalendarComponents/CalendarPage";
import SiteDoesNotExist from "./components/PageComponents/SiteDoesNotExist";

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
            <NavBar />
            <PageContent>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/tasks/:id" element={<TasksPage />}/>                 
                <Route path="/tasks-done/:id" element={<TasksPage />}/>
                <Route path="/add-task" element={<AddTask />}/> 
                <Route path="/calendar" element={<CalendarPage />} /> 
                <Route path="*" element={<SiteDoesNotExist />} />           
              </Routes>
            </PageContent>
          </div>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
