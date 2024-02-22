import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Combobox from "./ComboBox"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";
import './addingform.css'
import ErrorAlert from "../Alerts/ErrorAlert";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import API_URL from "../../config"

function RemoveCategory() {
    const {token} = useAuth()
    const [category, setCategory] = useState<string>("")
    const [categories, setCategories] = useState<[string]>([""])
    const [error, setError] = useState<string>("")

    useEffect(() => {
        axios.get(API_URL + "categories",{
            headers: {
                "x-access-token": `${token}`
            }
        })
        .then((res) => {
            setCategories(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);
            


    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!category) {
            setError("Please fill the field.")
            return
        }
    }
    return (
        <div className="ml-500">
            <Card className="w-[400px]">
                {error && <ErrorAlert message={error} /> }
                <CardHeader className="flex justify-center items-center">
                        <CardTitle>Remove new task category</CardTitle>        
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full justify-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="category">Category</Label>
                                <Combobox category={category} setCategory={setCategory} />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center flex-wrap">
                    <Button className="w-[400px] hover:bg-purple-700" 
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleClick(e)}>Remove
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RemoveCategory