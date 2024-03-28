import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";
import meta from "../images/logo-Meta.png";

export const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center"> 
        <Image
          src={meta}
          width={55}
          height={30}
          layout="fixed"
          className="cursor-pointer"
        />

        <div className="flex ml-2 items-center rounded-full bg-grey-100 p-2">
          <SearchIcon className="h-6 text-gray-500" />
          <input
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink hidden md:inline-flex"
            type="text"
            placeholder="Search Meta"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
          <HeaderIcon Icon={PlayIcon} />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end menu">
        {/* Profile picture */}
        <Image
          src={session.user.image}
          width={40}
          height={40}
          onClick={signOut}
          className="rounded-full cursor-pointer "
        />
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};
