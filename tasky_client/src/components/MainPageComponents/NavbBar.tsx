import {
    NavigationMenu,    
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import TaskyLogo from "@/assets/tasky_logo.png";
import { MdOutlineAccountCircle } from "react-icons/md";

type MenuOptions = {
    [key: string]: string;
};

function NavbBar() {
    const menuOptions: MenuOptions = {
        "Your tasks": "/tasky/tasks",
        "Your calendar": "/tasky/calendar",
    }
  return (
    <div className="w-screen flex justify-between border-b-2 border-black bg-gradient-to-r from-purple-100 to-purple-900">
        <div className="">
            <img src={TaskyLogo} width={125} alt="" />
        </div>
        <NavigationMenu className="mr-5" >
            <NavigationMenuList>
                {Object.keys(menuOptions).map((option) => 
                <NavigationMenuItem key={option}>                    
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href={menuOptions[option]}>{option}</NavigationMenuLink>
                </NavigationMenuItem>)}
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/tasky/account">
                        <MdOutlineAccountCircle size={30} />
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default NavbBar