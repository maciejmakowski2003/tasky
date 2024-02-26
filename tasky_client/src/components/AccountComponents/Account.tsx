import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAuth } from "@/context/AuthContext"
import ChangePasswordForm from "./ChangePasswordForm"

function Account() {
  const { email } = useAuth()
  return (
    <div className="flex flex-col items-center">
      <Card className="w-[400px] h-auto mb-10">
        <CardHeader className="flex flex-row justify-center">
          <CardTitle className="text-purple-500">Welcome {email}</CardTitle>
        </CardHeader>
      </Card>
      <ChangePasswordForm />
    </div>
  )
}

export default Account