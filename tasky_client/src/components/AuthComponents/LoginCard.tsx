import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TaskyLogo from "@/assets/tasky_logo.png";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CookiesManager from "@/helpers/Cookiesmanager";
import ErrorAlert from "../Alerts/ErrorAlert";
import SuccessAlert from "../Alerts/SuccessAlert";
import API_URL from "@/config";

function LoginCard() {

  const { setToken } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all the fields");
      return;
    }

    const fd = new FormData();
    fd.append("email", email);
    fd.append("password", password);

    axios.post(API_URL+ "auth/login", fd, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if(res.status !== 200 || !res.data.token) {
        setError("Invalid credentials");
        setEmail("");
        setPassword("");
        return;
      }

      const { token } = res.data;
      setToken(token);
      setSuccess("Login successful");
      setError("");
      CookiesManager.setCookie("token", token, 1);
      navigate("/");
    })
    .catch((err) => {
      setError(err.response.data.message)
    });
  }



  return (
      <Card className="p-3 w-[400px]">
        {error && <ErrorAlert message={error}/>}
        {success && <SuccessAlert message={success}/>}
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Login</CardTitle>
              <CardDescription>Manage your tasks effectively!</CardDescription> 
            </div>           
            <img src={TaskyLogo} width={120} height={120} />
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" 
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" 
                  type="password" 
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                 />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center flex-wrap">
          <Button className="w-[400px] hover:bg-purple-700" onClick={handleLogin}>Login</Button>
          <CardDescription>Don't have account? <a href="/signup" className="text-purple-500 hover:underline">Sign up</a></CardDescription>
        </CardFooter>
      </Card>
    )
}

export default LoginCard