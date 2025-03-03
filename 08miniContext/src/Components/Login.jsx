import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setUser=useContext(UserContext).setUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser
    ({
      username: username,
      password: password,
    });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        
      />
      {"  "}
      <input
        type="String"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
