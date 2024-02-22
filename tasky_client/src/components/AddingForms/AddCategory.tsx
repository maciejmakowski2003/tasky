import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import './addingform.css'
import ErrorAlert from "../Alerts/ErrorAlert";
import { useAuth } from "@/context/AuthContext";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import axios from "axios";
import API_URL from "../../config"

function AddCategory() {
    const {token} = useAuth()
    const [name, setName] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [color, setColor] = useColor("#561ecb");
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!name || !color.hex) {
            setError("Please fill the field.")
            return
        }

        const fd = new FormData();
        fd.append("name", name);
        fd.append("color", color.hex);

        axios.post(API_URL + "add-category",fd,{
            headers: {
                "x-access-token": `${token}`,
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            setError("")
            console.log(res.data)
            window.location.reload()
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
                        <CardTitle>Add new task name</CardTitle>        
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full justify-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" 
                                    placeholder="Name" 
                                    maxLength={25} 
                                    value={name}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                />
                            </div>
                            <ColorPicker height={100} hideAlpha={true} color={color} onChange={setColor} />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center flex-wrap">
                    <Button className="w-[400px] hover:bg-purple-700" 
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleClick(e)}>Add
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default AddCategory