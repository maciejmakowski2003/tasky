import {
    Card,
    CardContent,
    CardHeader,
    CardFooter
  } from "@/components/ui/card"
import { MdOutlineDelete } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoMdReturnLeft } from "react-icons/io";
import { ReactNode } from "react";
import axios from "axios";
import API_URL from "@/config";
import { useAuth } from "@/context/AuthContext";

type Options = {
    [key: string]: ReactNode;
};

interface ITask {
    id: number;
    name: string;
    doItUntil: string;
    done: boolean;
    category: string;
    color: string;
}

function TaskCard({task}: {task: ITask}) {
    const {token} = useAuth()

    const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault()
        switch(e.currentTarget.id) {
            case "action":
                axios.put(API_URL + "tasks/update-status/" + task.id,null, {
                    headers: {
                        'x-access-token': `${token}`,
                    }
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
                window.location.reload()
                break
            case "delete":
                axios.delete(API_URL + "tasks/" + task.id, {
                    headers: {
                        "x-access-token": `${token}`
                    }
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
                window.location.reload()
                break
            default:
                break
        }
    }

    const buttons: Options = {
        "action": <IoCheckmarkDoneCircleOutline size={20} />,
        "delete": <MdOutlineDelete size={20} />,
    }

    if(window.location.pathname.split("/")[1] == "tasks-done") {
        buttons["action"] = <IoMdReturnLeft size={20} />
    }


    return (
        <Card className="w-[170px] h-[170px] m-5 flex flex-col justify-between border-2 rounded-lg border-black">
            <div>
                <CardHeader className="p-1 text-xs font-serif">
                    <p className="text-primary underline-offset-4 hover:underline" style={{ color: task.color }}>{task.category}</p>
                </CardHeader>
                <CardContent className="p-1 flex justify-center font-bold text-xs text-wrap">
                    <p className="">{task.name}</p>
                </CardContent>
            </div>
            <CardFooter className="p-1 flex justify-between content-end">
                <p className="text-xs">{task.doItUntil}</p>
                <div className="flex flex-row">
                    {Object.keys(buttons).map((button) =>
                        <p key={button} id={button} className="hover:cursor-pointer text-purple-500" onClick={(e: React.MouseEvent<HTMLParagraphElement>) => handleClick(e)}>{buttons[button]}</p>)
                    }
                </div>
            </CardFooter>
        </Card>
    )
}

export default TaskCard