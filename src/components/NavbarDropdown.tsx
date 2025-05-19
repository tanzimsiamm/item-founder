"use client";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { usePathname, useRouter } from "next/navigation";

import { logOutUser } from "../services/AuthService";
import { useUser } from "../context/user.provider";
import { protectedRoutes } from "../constant";

export default function NavbarDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const { setIsLoading: userLoading, user } = useUser();
  const handledNvigation = (path: string) => {
    router.push(path);
  };

  const handleLogOut = () => {
    logOutUser();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className=" cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" onClick={() => handledNvigation("/profile")}>
          profile
        </DropdownItem>
        <DropdownItem
          key="copy"
          onClick={() => handledNvigation("/profile/create-post")}
        >
          create post
        </DropdownItem>
        <DropdownItem
          key="edit"
          onClick={() => handledNvigation("/profile/profile-settings")}
        >
          profile settings
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() => handleLogOut()}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
