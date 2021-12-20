import { React, useState } from "react";
import { useNavigate } from "react-router";
import { BiLockAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Login() {
  const [inputs, setInputs] = useState({});
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const [loginUser, { data: loginResponse, error: loginError }] =
  //     useLoginUserMutation();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userObject = {
      email: inputs.userName,
      password: inputs.password,
    };
    alert(inputs.userName + inputs.password);
    // loginUser(userObject);

    setInputs("");
  };
  //   if (loginResponse) {
  //     dispatch(logIn(loginResponse));
  //     navigate("/profile");
  //   }
  return (
    <>
      {/* {token !== "" && navigate("/home")} */}
      {/* <p>{loginError ? loginError.data.error : ""}</p> */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/register   "
                className="font-medium text-teal-500 hover:text-teal-600 transition-all duration-300"
              >
                Register
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="userName" className="sr-only">
                  User Name
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  value={inputs.userName || ""}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User Name"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                {/* <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a> */}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md
                 text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <BiLockAlt
                    className="h-5 w-5 text-white  "
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
