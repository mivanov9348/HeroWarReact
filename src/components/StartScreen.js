export default function StartScreen({ onGameStart }) {
  const btnStyle = {
    fontSize: "20px",
    textAlign: "center",
    width: "200px",
    height: "50px",
    backgroundColor: "grey",
    color: "white",
  };

  return (
    <div className="startScreen">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button style={btnStyle} onClick={onGameStart}>
          Start Game
        </button>
      </div>
    </div>
  );
}
