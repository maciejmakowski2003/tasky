import AddTask from "./AddTask"
import AddCategory from "./AddCategory"
import RemoveCategory from "./RemoveCategory"
import axios from "axios"
import { useAuth } from "@/context/AuthContext"
import API_URL from "@/config"
import { useState, useEffect } from "react"

function AddTaskPage() {
  const { token } = useAuth()
  const [categories, setCategories] = useState<{id: number, name: string, color: string, userID: number }[]>([])

  useEffect(() => {
    axios.get(API_URL + "categories", {
      headers: {
        "x-access-token": `${token}`,
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      setCategories(res.data)
    })
    .catch((err) => {
      console.log(err.response.data.message)
    });
  }, [token])

  return (
    <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-10">
            <AddTask categories={categories} />
            <RemoveCategory categories={categories} />
        </div>
        <AddCategory />
    </div>
  )
}

export default AddTaskPage