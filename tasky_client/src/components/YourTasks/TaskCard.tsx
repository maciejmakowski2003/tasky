import {
    Card,
    CardContent,
    CardHeader,
    CardFooter
  } from "@/components/ui/card"
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoMdReturnLeft } from "react-icons/io";
import { ReactNode } from "react";

type Options = {
    [key: string]: ReactNode;
};


function TaskCard() {

    const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault()
        switch(e.currentTarget.id) {
            case "action":
                console.log("action")
                break
            case "edit":
                console.log("edit")
                break
            case "delete":
                console.log("delete")
                break
            default:
                break
        }
    }

    const buttons: Options = {
        "action": <IoCheckmarkDoneCircleOutline size={20} />,
        "edit": <MdOutlineEdit size={20} />,
        "delete": <MdOutlineDelete size={20} />,
    }

    if(window.location.pathname == "/tasks/done") {
        buttons["action"] = <IoMdReturnLeft size={20} />
    }


    return (
        <Card className="w-[170px] h-[170px] m-5 flex flex-col justify-between border-2 rounded-lg border-black">
            <div>
                <CardHeader className="p-1 text-xs font-serif">
                    <p className="text-primary underline-offset-4 hover:underline">Category</p>
                </CardHeader>
                <CardContent className="p-1 flex justify-center font-bold text-xs text-wrap">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
            </div>
            <CardFooter className="p-1 flex justify-between content-end">
                <p className="text-xs">12/12/2022</p>
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