"use client";
import { Avatar } from "@heroui/avatar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,} from "@heroui/dropdown";
import { useRouter } from "next/navigation";

export default function NavbarDropdown() {
    const router = useRouter();
    const handledNvigation = (path: string) => {
        router.push(path);
    };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className=" cursor-pointer" name="joe" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handledNvigation('/profile')} key="new">profile</DropdownItem>
        <DropdownItem onClick={() => handledNvigation('/create-post')} key="copy">create post</DropdownItem>
        <DropdownItem onClick={() => handledNvigation('/profile/profile-settings')} key="edit">profile settings</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
