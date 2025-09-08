import React, { useState } from "react";
import "../styles/compatibilityExplanation.css";

export const CompatibilityExplanation = ({ details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="explanation-container">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="explanation-toggle"
        aria-expanded={isExpanded}
        aria-controls="explanation-details"
      >
        <span className="toggle-text">궁합 계산 방식 확인하기</span>
        <span className="toggle-icon">{isExpanded ? "▲" : "▼"}</span>
      </button>

      <div
        id="explanation-details"
        className={`explanation-details ${isExpanded ? "expanded" : ""}`}
        aria-hidden={!isExpanded}
      >
        <div className="explanation-grid">
          <div className="factor-card">
            <p className="factor-title">이름 기본값</p>
            <p className="factor-description">
              첫 번째 이름:{" "}
              <span className="factor-value-number">
                {details.nameValues.name1}
              </span>{" "}
              포인트
            </p>
            <p className="factor-value">
              두 번째 이름:{" "}
              <span className="factor-value-number">
                {details.nameValues.name2}
              </span>{" "}
              포인트
            </p>
            <p className="factor-note">
              (한글은 자음과 모음에 가중치를 부여하고, 영문은 알파벳 위치 기준)
            </p>
          </div>
          <div className="factor-card">
            <p className="factor-title">성별 요소</p>
            <p className="factor-description">
              {details.genderFactor.description}
            </p>
            <p className="factor-value">
              가중치:{" "}
              <span className="factor-value-number">
                x{details.genderFactor.value}
              </span>
            </p>
            <p className="factor-note">(이성일 경우 더 높은 가중치)</p>
          </div>
          <div className="factor-card">
            <p className="factor-title">이름 길이</p>
            <p className="factor-description">
              {details.lengthFactor.description}
            </p>
            <p className="factor-value">
              가중치:{" "}
              <span className="factor-value-number">
                x{details.lengthFactor.value}
              </span>
            </p>
            <p className="factor-note">(이름 길이가 비슷할수록 더 높은 점수)</p>
          </div>
          <div className="factor-card">
            <p className="factor-title">첫 글자 요소</p>
            <p className="factor-description">
              {details.firstCharFactor.description}
            </p>
            <p className="factor-value">
              가중치:{" "}
              <span className="factor-value-number">
                x{details.firstCharFactor.value}
              </span>
            </p>
            <p className="factor-note">(첫 글자가 같으면 더 높은 점수)</p>
          </div>
          <div className="factor-card">
            <p className="factor-title">공통 글자</p>
            <p className="factor-description">
              {details.sharedCharFactor.description}
            </p>
            <p className="factor-value">
              가중치:{" "}
              <span className="factor-value-number">
                x{details.sharedCharFactor.value}
              </span>
            </p>
            <p className="factor-note">(공통 글자가 많을수록 더 높은 점수)</p>
          </div>
          <div className="factor-card">
            <p className="factor-title">발음 패턴</p>
            <p className="factor-description">
              {details.soundFactor.description}
            </p>
            <p className="factor-value">
              가중치:{" "}
              <span className="factor-value-number">
                x{details.soundFactor.value}
              </span>
            </p>
            <p className="factor-note">
              (한글에서 비슷한 발음 패턴이 있으면 더 높은 점수)
            </p>
          </div>
        </div>

        <p className="explanation-summary">
          위의 모든 요소들을 종합적으로 계산하여 최종 궁합 점수가 결정됩니다.
        </p>
      </div>
    </div>
  );
};
