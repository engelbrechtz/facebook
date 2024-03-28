import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { db, storage } from "../Firebase";
import { addDoc, collection, doc } from "firebase/firestore";

import {
  VideoCameraIcon,
  PhotographIcon,
  EmojiHappyIcon,
  CameraIcon,
} from "@heroicons/react/solid";

export const InputBox = () => {
  const { data: session } = useSession();
  const inputReference = useRef(null);
  const collectionRef = collection(db, "posts");
  const filePickerRef = useRef(null);

  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    // Prevents the page from reloading
    e.preventDefault();

    // if there is no value in the input field, when submitted return nothing.
    if (!inputReference.current.value) {
      return;
    }

    // The users session parsed into an object literal
    const userData = {
      message: inputReference.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };

		// Post users data/comment/post to firestore database
    addDoc(collectionRef, userData);

    inputReference.current.value = "";
  };

  const addImageToPost = (e) => {
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.targets.files[0]);
    }
		fileReader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl text-gray-500 mt-6 shadow-md">
      {/* Main Container */}
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-200 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputReference}
            placeholder={`Whats on your mind? ${session.user.name}`}
          />
          <button type="submit" className="" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div onClick={removeImage}>
            <img src={imageToPost} />
            <p className="text-red-400">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
            ref={filePickerRef}
            onChange={addImageToPost}
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};
