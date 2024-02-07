import {
    NavigationMenu,    
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import TaskyLogo from "@/assets/tasky_logo.png";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { ReactNode } from "react";

type MenuOptions = {
    [key: string]: ReactNode;
};

function NavBar() {
    const menuOptions: MenuOptions = {
        "/tasks": <IoHomeOutline size={30} />,
        "/account": < MdOutlineAccountCircle size={30} />,
    }
    return (
        <div className="w-screen flex justify-between">
            <div className="">
                <img src={TaskyLogo} width={125} alt="" />
            </div>
            <NavigationMenu className="mr-5" >
                <NavigationMenuList>
                    {Object.keys(menuOptions).map((option) => 
                    <NavigationMenuItem key={option}>                    
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} href={option}>{menuOptions[option]}</NavigationMenuLink>
                    </NavigationMenuItem>)}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
  )
}

export default NavBar