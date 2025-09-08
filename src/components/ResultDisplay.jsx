import React from "react";
import "../styles/resultDisplay.css";

export const ResultDisplay = ({ score, message, onReset }) => {
  // 점수에 따른 색상 결정
  const getScoreColor = () => {
    if (score >= 80) return "text-pink-500";
    if (score >= 60) return "text-purple-500";
    if (score >= 40) return "text-blue-500";
    if (score >= 20) return "text-yellow-500";
    return "text-gray-500";
  };

  // 점수에 따른 CSS 클래스 결정
  const getScoreColorClass = () => {
    if (score >= 80) return "score-color-high";
    if (score >= 60) return "score-color-good";
    if (score >= 40) return "score-color-medium";
    if (score >= 20) return "score-color-low";
    return "score-color-poor";
  };

  return (
    <div className="result-container">
      <div className="heart-animation">
        {score >= 80
          ? "❤️"
          : score >= 60
          ? "💖"
          : score >= 40
          ? "💙"
          : score >= 20
          ? "💛"
          : "🖤"}
      </div>
      <div className={`result-score ${getScoreColorClass()}`}>{score}%</div>
      <p className="result-message">{message}</p>
      <button onClick={onReset} className="reset-button">
        다시하기
      </button>
    </div>
  );
};
