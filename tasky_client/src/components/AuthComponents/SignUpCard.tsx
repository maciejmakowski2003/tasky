import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TaskyLogo from "@/assets/tasky_logo.png";

function SignUpCard() {
    return (
        <Card className="w-[400px]">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Manage your tasks effectively!</CardDescription> 
              </div>           
              <img src={TaskyLogo} width={120} height={120} />
            </div>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input id="username" placeholder="tasky123" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="email@gmail.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Min. 8 characters" />
                  <Input id="repeatedPassword" type="password" placeholder="Repeat password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center flex-wrap">
            <Button className="w-[400px] hover:bg-purple-700">Sign Up</Button>
            <CardDescription>Already signed up? <a href="/login" className="text-purple-500 hover:underline">Sign in</a></CardDescription>
          </CardFooter>
        </Card>
      )
}

export default SignUpCard