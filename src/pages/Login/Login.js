import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import loginUser from "../../images/login-user.svg";
import "./Login.css";
export default function Login() {
  const { loginWithGoogle, githubLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  // eye toggle for password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const eye = passwordShown ? <AiFillEye /> : <AiOutlineEyeInvisible />;

  // google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  // github login
  const handleGithubLogin = () => {
    githubLogin().then((res) => console.log(res));
  };
  return (
    <div className="flex">
      <section className="bg-gray-50 dark:bg-gray-900 lg:w-1/2">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <a
            href="#?"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Smart Phone
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    {...register("email", { pattern: /^\S+@\S+\.\S+$/ })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    {...register("password", {
                      pattern: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                    })}
                  />
                  <i
                    className=" cursor-pointer"
                    onClick={togglePasswordVisiblity}
                  >
                    {eye}
                  </i>{" "}
                  {errors.password?.type === "pattern" && (
                    <p className=" text-red-700" role="alert">
                      password minimum 6 character && maximum 16 character
                    </p>
                  )}
                </div>
                <div className="p-1 rounded bg-gradient-to-r from-rose-500 to-purple-500">
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 p-1 px-5 py-2.5"
                  >
                    Sign In
                  </button>
                </div>

                <div>
                  <hr />
                  <span className="flex justify-center items-center">or</span>
                  <hr />
                </div>
                <div
                  onClick={handleGoogleLogin}
                  className=" bg-gray-50 text-xl border flex justify-center items-center w-full space-x-2 cursor-pointer hover:bg-gray-100 py-2.5"
                >
                  <BsGoogle />
                  <span>Google Login</span>
                </div>
                <div
                  onClick={handleGithubLogin}
                  className=" bg-gray-50 text-xl border flex justify-center items-center w-full space-x-2 cursor-pointer hover:bg-gray-100 py-2.5"
                >
                  <BsGithub />
                  <span>Github Login</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#?"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#?"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className=" hidden lg:block w-1/2">
        <img src={loginUser} alt="" />
      </div>
    </div>
  );
}
