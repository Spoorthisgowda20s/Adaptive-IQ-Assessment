import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) navigate("/dashboard");
  }, [navigate]);

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        const res = await axios.post("http://localhost:8000/api/auth/login", {
          email,
          password,
        });
        localStorage.setItem("userId", res.data.user._id);
      } else {
        const res = await axios.post("http://localhost:8000/api/auth/register", {
          name,
          email,
          password,
        });
        localStorage.setItem("userId", res.data.user._id);
      }

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Adaptive IQ Assessment</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          {isLogin ? "Login" : "Create Account"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)} style={styles.toggle}>
          {isLogin
            ? "Don't have an account? Create one"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2a5298",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  toggle: {
    marginTop: "15px",
    color: "#2a5298",
    cursor: "pointer",
  },
};

export default Login;