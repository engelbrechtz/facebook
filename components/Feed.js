import { InputBox } from "./InputBox";
import Posts from "./Posts";

export const Feed = () => {
  return (
    <div className="flex-grow m-auto h-screen pb-44 pt-6  xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <InputBox />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
