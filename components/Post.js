import Image from "next/image";
import { useSession } from "next-auth/react";

const Post = ({ name, message, email, image }) => {
  const { data: session } = useSession();
  return (
    <div className="w-30 bg-white m-3 rounded-2xl">
      <div className="flex m-2 p-3">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <h1 className="text-gray mt-2">{name}</h1>
      </div>
      <p className="ml-4">{message}</p>
    </div>
  );
};

export default Post;
