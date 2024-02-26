import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";
import API_URL from "@/config";
import { useAuth } from "@/context/AuthContext";

interface IEvent {
    id: number;
    name: string;
    from: string;
    to: string;
    useID: number;
}

function EventCard({event}: {event: IEvent}) {
  const {token} = useAuth()

  const handleDelete = () => {
    axios.delete(API_URL + "delete-event/" + event.id, {
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
  }

  return (
    <Card className="w-[350px] h-auto">
      <CardContent className="p-2" >
        <p className="text-primary text-bold underline-offset-4 hover:underline">{event.name}</p>
        <div className="flex flex-row justify-between">
          <p className="font-bold">From: {event.from} To: {event.to}</p>
          <MdOutlineDelete size={20} className="hover:cursor-pointer text-purple-500" onClick={handleDelete} />
        </div>
      </CardContent>
    </Card>
  )
}

export default EventCard