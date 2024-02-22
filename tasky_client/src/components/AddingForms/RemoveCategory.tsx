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
import { useState } from "react";
import './addingform.css'
import ErrorAlert from "../Alerts/ErrorAlert";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import API_URL from "../../config"

interface ComboboxProps {
    categories: {id: number, name: string, color: string, userID: number } []
}

function RemoveCategory({categories}: ComboboxProps) {
    const {token} = useAuth()
    const [category, setCategory] = useState<string>("")
    const [error, setError] = useState<string>("")

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!category) {
            setError("Please fill the field.")
            return
        }

        axios.delete(API_URL + "remove-category",{
            headers: {
                "x-access-token": `${token}`,
                "Content-Type": "application/json"
            },
            data: {
                category: category
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
                        <CardTitle>Remove task category</CardTitle>        
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full justify-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="category">Category</Label>
                                <Combobox category={category} setCategory={setCategory} categories={categories} />
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