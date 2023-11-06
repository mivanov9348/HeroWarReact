// Card.js
import React from "react";

export default function Card({ warrior, onClick }) {
  return (
    <div>
      <div className="card" onClick={onClick}>
        <div className="card-header">
          <img
            src={`./images/${warrior.image}`}
            alt={`${warrior.name}`}
            className="hero-image"
          />
        </div>
        <div className="card-body">
          <h1 className="hero-name">{warrior.name}</h1>
          <div className="health-bar-container">
            <div className="health-bar" style={{ width: warrior.health + "%" }}>
              {warrior.health} 🩸
            </div>
          </div>
          <div className="stats">
            <div className="stat-item">⚔: {warrior.attack}</div>
            <div className="stat-item">🛡: {warrior.defense}</div>
            <div className="stat-item">💨: {warrior.speed}</div>
          </div>
          <hr />
          <div>
            Wins: {warrior.kills} | Losses: {warrior.deaths}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
