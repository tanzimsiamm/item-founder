"use client";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { useRouter } from "next/navigation";
import { logOutUser } from "../services/AuthService";
import { useUser } from "../context/user.provider";

export default function NavbarDropdown() {
  const router = useRouter();
  const {setIsLoading: userLoading, user} = useUser();
  const handledNvigation = (path: string) => {
    router.push(path);
  };

  const handleLogOut =() =>{
    logOutUser();
    userLoading(true);
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className=" cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handledNvigation("/profile")} key="new">
          profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handledNvigation("/profile/create-post")}
          key="copy"
        >
          create post
        </DropdownItem>
        <DropdownItem
          onClick={() => handledNvigation("/profile/profile-settings")}
          key="edit"
        >
          profile settings
        </DropdownItem>
        <DropdownItem
          onClick={() => handleLogOut()}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
