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
import axios from "axios";
import API_URL from "../../config"

function AddCategory() {
    const {token} = useAuth()
    const [category, setCategory] = useState<string>("")
    const [error, setError] = useState<string>("")

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!category) {
            setError("Please fill the field.")
            return
        }

        console.log(token)
        
        axios.post(API_URL + "add-category", {
            name: category
        }, {
            headers: {
                "x-access-token": `${token}`
            }
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className="ml-500">
            <Card className="w-[400px]">
                {error && <ErrorAlert message={error} /> }
                <CardHeader className="flex justify-center items-center">
                        <CardTitle>Add new task category</CardTitle>        
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full justify-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" 
                                    placeholder="Name" 
                                    maxLength={25} 
                                    value={category}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
                                />
                            </div>
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