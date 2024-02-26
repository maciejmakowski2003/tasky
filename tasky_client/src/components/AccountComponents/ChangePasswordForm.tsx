import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ErrorAlert from "../Alerts/ErrorAlert"
import { useAuth } from "@/context/AuthContext"
import axios from "axios"
import API_URL from "../../config"
import { useState } from "react"

function ChangePasswordForm() {
    const {token, logout} = useAuth()
    const [oldPassword, setOldPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [error, setError] = useState<string>("")

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!oldPassword || !newPassword) {
            setError("Please fill the field.")
            return
        }

        const fd = new FormData();
        fd.append("oldPassword", oldPassword);
        fd.append("newPassword", newPassword);

        axios.put(API_URL + "auth/change-password",fd,{
            headers: {
                "x-access-token": `${token}`,
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            setError("")
            console.log(res.data)
            logout()

        })
        .catch((err) => {
            setError(err.response.data.message)
        });
    }

    return (
        <div className="ml-500">
            <Card className="w-[400px]">
                {error && <ErrorAlert message={error} /> }
                <CardHeader className="flex justify-center items-center">
                        <CardTitle>Change password</CardTitle>        
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full justify-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="oldPassword">Old Password</Label>
                                <Input id="oldPassword" 
                                    placeholder="Old Password" 
                                    type="password"
                                    maxLength={25} 
                                    value={oldPassword}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input id="newPassword" 
                                    placeholder="New Password" 
                                    type="password"
                                    maxLength={25} 
                                    value={newPassword}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center flex-wrap">
                    <Button className="w-[400px] hover:bg-purple-700" 
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleClick(e)}>Change
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ChangePasswordForm