import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../utils/constants";
import { AuthAPI } from "../utils/api";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  const handleMovePage = (page: string): void => {
    navigate(`${page}`);
  };

  const handleSubmit = async () => {
    const Auth = {
      email: email,
      password: password,
    };
    AuthAPI.signUp(Auth);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <span className="font-bold">ID</span>
        <input
          id="id"
          type="text"
          className="px-2 py-1 border border-gray-300 rounded"
          value={email}
          onChange={handleEmailChange}
        />
        <span className="font-bold">Password</span>
        <input
          id="password"
          type="password"
          className="px-2 py-1 border border-gray-300 rounded"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          className="px-4 py-2 mt-4 bg-black text-white rounded hover:bg-gray-800"
          onClick={() => handleSubmit()}
        >
          SignUp
        </button>
        <button className="px-4 py-2 mt-4 bg-green-800 text-white rounded hover:bg-green-700"
        onClick={() => handleMovePage(PATH.signIn)}>
          Go Login
        </button>
      </div>
    </div>
  );
}

export default App;
