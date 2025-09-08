import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//           <div>
//             <label for="name2">두 번째 사람 이름</label>
//             <input type="text" id="name2" placeholder="이름 입력">
//             <div class="gender-select" id="gender2">
//               <div class="gender-option male" data-gender="male">남성</div>
//               <div class="gender-option female" data-gender="female">여성</div>
//             </div>
//           </div>
//         </div>

//         <button id="calculate-btn">궁합 확인하기</button>
//       </div>

//       <div class="result-container" id="result">
//         <div class="heart-animation">❤️</div>
//         <div class="compatibility-score" id="score">0%</div>
//         <div class="compatibility-message" id="message"></div>
//         <button id="reset-btn">다시하기</button>
//       </div>
//     </div>
//   </div>
// `;

// // 성별 선택 기능
// const setupGenderSelect = (containerId) => {
//   const container = document.getElementById(containerId);
//   const options = container.querySelectorAll(".gender-option");

//   options.forEach((option) => {
//     option.addEventListener("click", () => {
//       // 기존 선택 해제
//       options.forEach((opt) => opt.classList.remove("selected"));
//       // 새로 선택
//       option.classList.add("selected");
//     });
//   });
// };

// setupGenderSelect("gender1");
// setupGenderSelect("gender2");

// // 이름에서 특수문자 제거 및 공백 처리
// const cleanName = (name) => {
//   return name.replace(/[^\uAC00-\uD7A3a-zA-Z]/g, "").trim();
// };

// // 이름의 각 글자 값을 계산
// const calculateNameValue = (name) => {
//   let value = 0;

//   // 한글과 영어에 각기 다른 가중치 부여
//   for (let i = 0; i < name.length; i++) {
//     const char = name.charAt(i);
//     // 한글 유니코드 범위 확인 (AC00-D7A3)
//     if (/[\uAC00-\uD7A3]/.test(char)) {
//       // 한글의 경우 초성, 중성, 종성을 고려하여 값 계산
//       const code = char.charCodeAt(0) - 0xac00;

//       // 종성 유무에 따라 가중치 부여
//       const hasJongseong = code % 28 > 0;

//       // 초성 (19종), 중성 (21종), 종성 (28종, 종성 없음 포함)
//       const choseong = Math.floor(code / (21 * 28));
//       const jungseong = Math.floor((code % (21 * 28)) / 28);

//       value += (choseong + 1) * 3;
//       value += (jungseong + 1) * 2;
//       value += hasJongseong ? (code % 28) * 1.5 : 0;
//     } else if (/[a-zA-Z]/.test(char)) {
//       // 영어의 경우 알파벳 순서에 따른 값
//       value += (char.toLowerCase().charCodeAt(0) - 96) * 2;
//     }
//   }

//   return value;
// };

// // 궁합 점수 계산
// const calculateCompatibility = (name1, name2, gender1, gender2) => {
//   // 이름 값 계산
//   const value1 = calculateNameValue(cleanName(name1));
//   const value2 = calculateNameValue(cleanName(name2));

//   // 성별 가중치 (남여 조합에 따른 추가 점수)
//   let genderFactor = 1.0;
//   if (
//     (gender1 === "male" && gender2 === "female") ||
//     (gender1 === "female" && gender2 === "male")
//   ) {
//     genderFactor = 1.2; // 이성 간 가중치 증가
//   }

//   // 이름 길이 유사성에 따른 가중치
//   const lengthFactor = 1 - Math.abs(name1.length - name2.length) * 0.05;

//   // 이름 첫 글자 일치 여부에 따른 가중치
//   const firstCharFactor = name1.charAt(0) === name2.charAt(0) ? 1.15 : 1.0;

//   // 이름의 공유 글자 수 계산
//   const sharedChars = [...new Set([...name1].filter((c) => name2.includes(c)))]
//     .length;
//   const sharedCharFactor = 1 + sharedChars * 0.05;

//   // 최종 점수 계산 (0~100% 사이)
//   const compatibilityValue =
//     ((value1 + value2) *
//       genderFactor *
//       lengthFactor *
//       firstCharFactor *
//       sharedCharFactor) %
//     100;

//   return Math.round(compatibilityValue);
// };

// // 궁합 메시지 생성
// const getCompatibilityMessage = (score) => {
//   if (score >= 90) {
//     return "운명적인 만남! 완벽한 궁합입니다! 💕";
//   } else if (score >= 80) {
//     return "정말 좋은 궁합입니다! 서로를 잘 이해할 수 있어요.";
//   } else if (score >= 70) {
//     return "좋은 관계를 유지할 수 있는 궁합입니다!";
//   } else if (score >= 60) {
//     return "서로를 이해하려 노력한다면 좋은 관계를 만들 수 있어요.";
//   } else if (score >= 50) {
//     return "평범한 궁합입니다. 서로 맞춰가며 노력해보세요.";
//   } else if (score >= 40) {
//     return "약간의 노력이 필요한 궁합입니다.";
//   } else if (score >= 30) {
//     return "많은 대화와 이해가 필요한 궁합입니다.";
//   } else if (score >= 20) {
//     return "서로 많이 다른 성향을 가진 것 같네요. 이해하려 노력해보세요.";
//   } else if (score >= 10) {
//     return "쉽지 않은 궁합이지만, 불가능한 것은 아니에요.";
//   } else {
//     return "서로를 이해하기 위해 더 많은 시간과 노력이 필요합니다.";
//   }
// };

// // 버튼 이벤트 설정
// document.getElementById("calculate-btn").addEventListener("click", () => {
//   const name1 = document.getElementById("name1").value;
//   const name2 = document.getElementById("name2").value;

//   // 선택된 성별 가져오기
//   const selectedGender1 = document.querySelector("#gender1 .selected");
//   const selectedGender2 = document.querySelector("#gender2 .selected");

//   // 입력 검증
//   if (!name1 || !name2) {
//     alert("두 사람의 이름을 모두 입력해주세요!");
//     return;
//   }

//   if (!selectedGender1 || !selectedGender2) {
//     alert("두 사람의 성별을 모두 선택해주세요!");
//     return;
//   }

//   const gender1 = selectedGender1.dataset.gender;
//   const gender2 = selectedGender2.dataset.gender;

//   // 궁합 계산
//   const score = calculateCompatibility(name1, name2, gender1, gender2);
//   const message = getCompatibilityMessage(score);

//   // 결과 표시
//   document.getElementById("score").textContent = `${score}%`;
//   document.getElementById("message").textContent = message;

//   const resultContainer = document.getElementById("result");
//   resultContainer.classList.add("show");
// });

// // 다시하기 버튼
// document.getElementById("reset-btn").addEventListener("click", () => {
//   document.getElementById("name1").value = "";
//   document.getElementById("name2").value = "";

//   // 성별 선택 초기화
//   document
//     .querySelectorAll(".gender-option")
//     .forEach((opt) => opt.classList.remove("selected"));

//   // 결과 숨기기
//   document.getElementById("result").classList.remove("show");
// });
