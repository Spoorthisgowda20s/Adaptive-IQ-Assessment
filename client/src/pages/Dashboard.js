import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Select Level</h2>

      <button onClick={() => navigate("/game/easy")}>Easy</button><br /><br />
      <button onClick={() => navigate("/game/medium")}>Medium</button><br /><br />
      <button onClick={() => navigate("/game/hard")}>Hard</button><br /><br />

      <button onClick={() => navigate("/profile")}>View Profile</button><br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;