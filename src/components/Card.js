import ActionPanel from "./ActionPanel";

export default function Card({ warrior, onClick, disabled }) {
  const cardStyle = {
    textAlign: "center",
    pointerEvents: disabled ? "none" : "auto",
    backgroundColor: disabled ? "white" : "grey",
  };

  return (
    <div>
      <div style={cardStyle} onClick={!disabled ? onClick : undefined}>
        <div className="card">
          <div className="card-header">
            <img
              src={`./images/${warrior.image}`}
              alt="hero"
              className="hero-image"
            />
          </div>
          <div className="card-body">
            <h1 className="hero-name">{warrior.name}</h1>
            <div className="health-bar-container">
              <div
                className="health-bar"
                style={{ width: warrior.health + "%" }}
              >
                {warrior.health} 🩸
              </div>
            </div>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-value">⚔: {warrior.attack} </span>
              </div>
              <div className="stat-item">
                <span className="stat-value">🛡: {warrior.defense} </span>
              </div>
              <div className="stat-item">
                <span className="stat-value">💨: {warrior.speed} </span>
              </div>
            </div>
            <hr></hr>
            <div>
              <span className="stat-value">
                Wins: {warrior.kills} | Loss:{warrior.deaths}
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
