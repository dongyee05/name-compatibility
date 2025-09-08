import React from "react";
import "../styles/nameForm.css";

export const NameForm = ({
  name1,
  name2,
  gender1,
  gender2,
  setName1,
  setName2,
  setGender1,
  setGender2,
  onCalculate,
}) => {
  return (
    <div className="form-container">
      <div className="form-grid">
        <div className="form-section">
          <label htmlFor="name1" className="form-label">
            첫 번째 사람 이름
          </label>
          <input
            type="text"
            id="name1"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="이름 입력"
            className="form-input"
          />

          <div className="gender-container">
            <p className="gender-label">성별</p>
            <div className="gender-buttons">
              <button
                type="button"
                onClick={() => setGender1("male")}
                className={`gender-button ${
                  gender1 === "male"
                    ? "gender-button-male-selected"
                    : "gender-button-unselected"
                }`}
              >
                남성
              </button>
              <button
                type="button"
                onClick={() => setGender1("female")}
                className={`gender-button ${
                  gender1 === "female"
                    ? "gender-button-female-selected"
                    : "gender-button-unselected"
                }`}
              >
                여성
              </button>
            </div>
          </div>
        </div>

        <div className="form-section">
          <label htmlFor="name2" className="form-label">
            두 번째 사람 이름
          </label>
          <input
            type="text"
            id="name2"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="이름 입력"
            className="form-input"
          />

          <div className="gender-container">
            <p className="gender-label">성별</p>
            <div className="gender-buttons">
              <button
                type="button"
                onClick={() => setGender2("male")}
                className={`gender-button ${
                  gender2 === "male"
                    ? "gender-button-male-selected"
                    : "gender-button-unselected"
                }`}
              >
                남성
              </button>
              <button
                type="button"
                onClick={() => setGender2("female")}
                className={`gender-button ${
                  gender2 === "female"
                    ? "gender-button-female-selected"
                    : "gender-button-unselected"
                }`}
              >
                여성
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="submit-container">
        <button onClick={onCalculate} className="submit-button">
          💞 궁합 확인하기
        </button>
      </div>
    </div>
  );
};
