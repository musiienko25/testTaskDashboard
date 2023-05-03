import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const history = useHistory();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      await login(username, password);
      history.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
