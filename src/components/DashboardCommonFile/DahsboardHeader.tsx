"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // ✅ sheet import
import { Menu, Power } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { logoutUser } from "../Authentication/logoutUser";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { logOut, useCurrentUserInfo } from "../Redux/Slice/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { DialogTitle } from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import DashboardSide from "./DashboadSide";
interface HeaderProps {
  onMenuClick: () => void;
  onCollapseClick: () => void;
}
const DashboardHeader = ({ onMenuClick, onCollapseClick }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUserInfo);
  const router = useRouter();
  console.log({ user })
  const handleLogOutUser = () => {
    logoutUser(router);
    dispatch(logOut());
    toast.success("Logged Out Successfully");
  };

  return (
    <div className="sticky top-0 z-50">
      <div className=" shadow bg-white py-2 px-4 flex items-center justify-between">
        {/* Left Side - Menu Button */}
        <div className="flex items-center gap-2">
          <Button
            // onClick={onMenuClick}
            variant={"outline"}
            onClick={onCollapseClick}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-none  transition-colors"
          >
            <Menu size={20} />
          </Button>
        </div>

        {/* ✅ Mobile menu */}

        <div className="md: hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-none hover:bg-secondary gray-100 ">
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-white  p-0 border-r">
              <DialogTitle className=" hidden">Mobile Sidebar</DialogTitle>

              <DashboardSide />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-3 2xl:gap-5 text-right">
            <div>
              <h1 className="text-base text-gray-800 ">
                Hello, {user?.name || "User"}
              </h1>
              <h1 className=" text-sm font-normal text-primary  capitalize">
                {user?.role}
              </h1>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.profile} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 mr-4 border-none p-2 shadow bg-background">
              <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile">Profile</Link>
                </DropdownMenuItem>

                {/* <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile/edit">Edit Profile</Link>
                </DropdownMenuItem> */}

                <DropdownMenuItem
                  onClick={handleLogOutUser}
                  className="bg-red-500 text-white hover:bg-red-600 cursor-pointer flex justify-between items-center"
                >
                  Log out
                  <DropdownMenuShortcut>
                    <Power size={18} />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
