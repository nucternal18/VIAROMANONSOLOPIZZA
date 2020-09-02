import React, { useState, useEffect, useContext } from "react";
import { Redirect } from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";

//context
import { AuthContext } from "../context/authContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const authContext = useContext(AuthContext);


  const { isError, clearErrors, login, isAuthenticated } = authContext;

  useEffect(() => {
    if (isError) {
      setError("The username or password provided were incorrect!");
      clearErrors();
    }

  }, [clearErrors, isError]);

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);

    setEmail("");
    setPassword("");
  };
    
    if (isAuthenticated) {
        return (<Redirect to='/' />)
    }

  return (
    <div className="w-full mx-auto  max-w-lg">
      <h1 className="my-8 text-center text-3xl">
        Account <span className="text-blue-700">Login</span>
      </h1>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-base font-bold mb-2"
          >
            Email Address
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <ErrorMessage errorMessage={error} />}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 w-2/5 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
