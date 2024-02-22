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

function SignUpCard() {
  const { setToken } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const navigate = useNavigate();

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all the fields");
      return;
    }
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    const fd = new FormData();
    fd.append("email", email);
    fd.append("password", password);

    axios.post("http://localhost:8080/api/auth/signup", fd, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if(res.status !== 200 || !res.data.token) {
        setError("Invalid credentials");
        setEmail("");
        setPassword("");
        setRepeatedPassword("");
        return;
      }

      const { token } = res.data;
      setToken(token);
      setSuccess("Signed up successful");
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
              <CardTitle>Sign Up</CardTitle>
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
                  placeholder="email@gmail.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" 
                  type="password" 
                  placeholder="Min. 8 characters" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input id="repeatedPassword" 
                  type="password" 
                  placeholder="Repeat password" 
                  value={repeatedPassword}
                  onChange={(e) => setRepeatedPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center flex-wrap">
          <Button className="w-[400px] hover:bg-purple-700" onClick={handleSignUp}>Sign Up</Button>
          <CardDescription>Already signed up? <a href="/login" className="text-purple-500 hover:underline">Sign in</a></CardDescription>
        </CardFooter>
      </Card>
    )
}

export default SignUpCard