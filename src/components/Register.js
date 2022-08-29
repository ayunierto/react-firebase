import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      // Modificadno mensajes de errors
      // if (error.code === "auth/internal-error") {
      //   setError('Invalid email')
      // }
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@company.com"
          onChange={handleChange}
        />

        <label htmlFor="password">password</label>

        <input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
          onChange={handleChange}
        />

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
