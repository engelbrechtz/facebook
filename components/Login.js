import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white cursor-pointer m-10"
      >
        Login with Github
      </h1>
    </div>
  );
};

export default Login;
