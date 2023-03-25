import { useState } from "react";

const Login = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "khaled",
      password: "15486584",
    },
    {
      id: 2,
      username: "batar",
      password: "10210",
    },
  ]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const CheckUserAndLogin = () => {
    const find = users.find(
      (u) => u.username === username && u.password === password
    );
    if (find) {
      alert("user loged in");
    } else {
      alert("user does not exist");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={CheckUserAndLogin}>Login</button>
    </div>
  );
};

export default Login;
