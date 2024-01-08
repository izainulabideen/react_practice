import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div
      className="relative flex justify-center items-center w-screen
     h-screen"
    >
      <div className="w-60 h-fit bg-slate-700 p-4 rounded-lg">
        <h2 className="p-2 text-white text-center mb-4 border-b-4 border-slate-600">Login</h2>
        <div>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="outline-none p-2 w-full mb-1 rounded-sm"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none p-2 w-full mb-1 rounded-sm"
          />
          <button onClick={handleSubmit}
            className="outline-none font-bold p-2 w-full mt-4 rounded-sm bg-red-400 text-white hover:bg-green-400"
            >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
