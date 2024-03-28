import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  UserGroupIcon,
  LibraryIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  ClockIcon,
  SaveIcon,
} from "@heroicons/react/solid";
const color = ["#e4e6e9", "#f1f3f5"];

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-1 w-60 absolute">
      <ul className="h-40">
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        >
          <Image
            src={session.user.image}
            width={40}
            height={40}
            className="rounded-full"
          />
          <li className="ml-4 m-2 ">{session.user.name}</li>
        </div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex"
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex "
        ></div>
        <div
          style={{ background: `${color[0]}`, width: "300px" }}
          className="cursor-pointer mt-5 rounded-md p-2 inline-flex sm:w-0"
        ></div>
      </ul>
    </div>
  );
};

export default Sidebar;
