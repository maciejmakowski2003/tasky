import { BrowserRouter, Route, Routes } from "react-router-dom";

import Protected from "./components/ProtectedRoutes/Protected";
import PageContent from "./components/PageComponents/PageContent";
import NavBar from "./components/PageComponents/NavBar";
import Home from "./components/HomeComponents/Home";
import AddTask from "./components/AddingForms/AddTask";
import TasksPage from "./components/TasksComponents/TasksPage";
import CalendarPage from "./components/CalendarComponents/CalendarPage";
import SiteDoesNotExist from "./components/PageComponents/SiteDoesNotExist";
import AddEvent from "./components/AddingForms/AddEvent";
import {useAuth} from "./context/AuthContext";

function App() {
  const {email, photo, token} = useAuth();
  
  return (
    <Protected email={email}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route path="/" element={
            <PageContent>
              <Home />
            </PageContent>
          }/>

          <Route path="/tasks/:id" element={
            <PageContent>
              <TasksPage />
            </PageContent>
          }/>   

          <Route path="/tasks-done/:id" element={
            <PageContent>
              <TasksPage />
            </PageContent>
          }/>  

          <Route path="/add-task" element={
            <PageContent>
              <AddTask />
            </PageContent>
          }/>  

          <Route path="/calendar" element={
            <PageContent>
              <CalendarPage />
            </PageContent>
          }/>

          <Route path="/add-event" element={
            <PageContent>
              <AddEvent />
            </PageContent>
          }/>

          <Route path="*" element={<SiteDoesNotExist />} />               
            
        </Routes>
      </BrowserRouter>
    </Protected>
  )
}

export default App
