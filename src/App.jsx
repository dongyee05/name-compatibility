import React, { useState } from "react";
import { NameForm } from "./components/NameForm";
import { ResultDisplay } from "./components/ResultDisplay";
import { CompatibilityExplanation } from "./components/CompatibilityExplanation";
import { QuoteDisplay } from "./components/QuoteDisplay";
import "./styles/app.css";
import "./styles/common.css";

// 이름에서 특수문자 제거 및 공백 처리
const cleanName = (name) => {
  return name.replace(/[^\uAC00-\uD7A3a-zA-Z]/g, "").trim();
};

// 이름의 각 글자 값을 계산
const calculateNameValue = (name) => {
  let value = 0;

  // 한글과 영어에 각기 다른 가중치 부여
  for (let i = 0; i < name.length; i++) {
    const char = name.charAt(i);
    // 한글 유니코드 범위 확인 (AC00-D7A3)
    if (/[\uAC00-\uD7A3]/.test(char)) {
      // 한글의 경우 초성, 중성, 종성을 고려하여 값 계산
      const code = char.charCodeAt(0) - 0xac00;

      // 종성 유무에 따라 가중치 부여
      const hasJongseong = code % 28 > 0;

      // 초성 (19종), 중성 (21종), 종성 (28종, 종성 없음 포함)
      const choseong = Math.floor(code / (21 * 28));
      const jungseong = Math.floor((code % (21 * 28)) / 28);

      value += (choseong + 1) * 3;
      value += (jungseong + 1) * 2;
      value += hasJongseong ? (code % 28) * 1.5 : 0;
    } else if (/[a-zA-Z]/.test(char)) {
      // 영어의 경우 알파벳 순서에 따른 값
      value += (char.toLowerCase().charCodeAt(0) - 96) * 2;
    }
  }

  return value;
};

// 궁합 계산 결과를 위한 세부 요소들
const calculateCompatibilityDetails = (name1, name2, gender1, gender2) => {
  // 기본 정보
  const name1Clean = cleanName(name1);
  const name2Clean = cleanName(name2);
  const value1 = calculateNameValue(name1Clean);
  const value2 = calculateNameValue(name2Clean);

  // 성별 가중치 (남여 조합에 따른 추가 점수)
  let genderFactor = 1.0;
  let genderDesc = "같은 성별";
  if (
    (gender1 === "male" && gender2 === "female") ||
    (gender1 === "female" && gender2 === "male")
  ) {
    genderFactor = 1.2; // 이성 간 가중치 증가
    genderDesc = "이성 간 궁합";
  }

  // 이름 길이 유사성에 따른 가중치
  const lengthDiff = Math.abs(name1Clean.length - name2Clean.length);
  const lengthFactor = 1 - lengthDiff * 0.05;
  const lengthDesc =
    lengthDiff === 0 ? "이름 길이가 같음" : `이름 길이 차이 ${lengthDiff}자`;

  // 이름 첫 글자 일치 여부에 따른 가중치
  const firstCharMatch = name1Clean.charAt(0) === name2Clean.charAt(0);
  const firstCharFactor = firstCharMatch ? 1.15 : 1.0;
  const firstCharDesc = firstCharMatch ? "첫 글자가 같음" : "첫 글자가 다름";

  // 이름의 공유 글자 수 계산
  const sharedChars = [
    ...new Set([...name1Clean].filter((c) => name2Clean.includes(c))),
  ];
  const sharedCharFactor = 1 + sharedChars.length * 0.05;
  const sharedCharDesc =
    sharedChars.length > 0
      ? `공통 글자 ${sharedChars.length}개: ${sharedChars.join(", ")}`
      : "공통 글자 없음";

  // 유사한 발음 패턴 체크 (한글의 경우)
  const soundPatternMatch =
    /[\uAC00-\uD7A3]/.test(name1Clean.charAt(0)) &&
    /[\uAC00-\uD7A3]/.test(name2Clean.charAt(0)) &&
    (name1Clean.charAt(0).charCodeAt(0) - 0xac00) % 28 ===
      (name2Clean.charAt(0).charCodeAt(0) - 0xac00) % 28;
  const soundFactor = soundPatternMatch ? 1.1 : 1.0;
  const soundDesc = soundPatternMatch ? "발음 패턴 유사함" : "발음 패턴 다름";

  // 최종 점수 계산 (0~100% 사이)
  const baseScore =
    (value1 + value2) *
    genderFactor *
    lengthFactor *
    firstCharFactor *
    sharedCharFactor *
    soundFactor;
  const finalScore = Math.min(Math.round(baseScore % 100), 100);

  return {
    score: finalScore,
    details: {
      nameValues: { name1: Math.round(value1), name2: Math.round(value2) },
      genderFactor: { value: genderFactor, description: genderDesc },
      lengthFactor: { value: lengthFactor.toFixed(2), description: lengthDesc },
      firstCharFactor: {
        value: firstCharFactor.toFixed(2),
        description: firstCharDesc,
      },
      sharedCharFactor: {
        value: sharedCharFactor.toFixed(2),
        description: sharedCharDesc,
      },
      soundFactor: { value: soundFactor.toFixed(2), description: soundDesc },
    },
  };
};

// 궁합 메시지 생성
const getCompatibilityMessage = (score) => {
  if (score >= 90) {
    return "운명적인 만남! 완벽한 궁합입니다! 💕";
  } else if (score >= 80) {
    return "정말 좋은 궁합입니다! 서로를 잘 이해할 수 있어요.";
  } else if (score >= 70) {
    return "좋은 관계를 유지할 수 있는 궁합입니다!";
  } else if (score >= 60) {
    return "서로를 이해하려 노력한다면 좋은 관계를 만들 수 있어요.";
  } else if (score >= 50) {
    return "평범한 궁합입니다. 서로 맞춰가며 노력해보세요.";
  } else if (score >= 40) {
    return "약간의 노력이 필요한 궁합입니다.";
  } else if (score >= 30) {
    return "많은 대화와 이해가 필요한 궁합입니다.";
  } else if (score >= 20) {
    return "서로 많이 다른 성향을 가진 것 같네요. 이해하려 노력해보세요.";
  } else if (score >= 10) {
    return "쉽지 않은 궁합이지만, 불가능한 것은 아니에요.";
  } else {
    return "서로를 이해하기 위해 더 많은 시간과 노력이 필요합니다.";
  }
};

// 궁합에 따른 명언 생성
const getCompatibilityQuote = (score) => {
  const quotes = [
    {
      min: 90,
      quote:
        "진정한 사랑은 두 영혼이 서로를 발견하고, 두 마음이 서로를 알아보는 순간에 시작됩니다.",
    },
    {
      min: 80,
      quote:
        "사랑은 서로의 다름을 인정하고, 그 속에서 조화를 찾는 아름다운 여정입니다.",
    },
    {
      min: 70,
      quote:
        "서로의 눈을 바라보며 함께 같은 방향을 향해 걷는 것, 그것이 사랑입니다.",
    },
    {
      min: 60,
      quote: "사랑은 서로를 더 나은 사람으로 만들어 주는 힘이 있습니다.",
    },
    {
      min: 50,
      quote:
        "사랑은 모든 것을 견디고, 모든 것을 믿으며, 모든 것을 바라고, 모든 것을 인내합니다.",
    },
    {
      min: 40,
      quote:
        "관계는 서로 반쪽씩 노력하는 것이 아니라, 서로 온전히 헌신할 때 피어납니다.",
    },
    {
      min: 30,
      quote:
        "진정한 인연은 쉽게 만들어지지 않습니다. 시간과 이해가 필요합니다.",
    },
    {
      min: 20,
      quote: "서로 다른 두 사람이 만날 때, 그 차이를 존중하는 것이 중요합니다.",
    },
    {
      min: 10,
      quote:
        "인생에서 가장 어려운 도전은 자신을 변화시키는 것이 아니라, 다른 이를 있는 그대로 받아들이는 것입니다.",
    },
    {
      min: 0,
      quote:
        "모든 만남에는 의미가 있습니다. 때로는 성장을 위한 거울이 되기도 합니다.",
    },
  ];

  for (const item of quotes) {
    if (score >= item.min) {
      return item.quote;
    }
  }
  return quotes[quotes.length - 1].quote;
};

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [gender1, setGender1] = useState(null);
  const [gender2, setGender2] = useState(null);
  const [result, setResult] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    if (!name1 || !name2 || !gender1 || !gender2) {
      alert("두 사람의 이름과 성별을 모두 입력해주세요!");
      return;
    }

    const compatibilityDetails = calculateCompatibilityDetails(
      name1,
      name2,
      gender1,
      gender2
    );
    const message = getCompatibilityMessage(compatibilityDetails.score);
    const quote = getCompatibilityQuote(compatibilityDetails.score);

    setResult({
      score: compatibilityDetails.score,
      message,
      quote,
      details: compatibilityDetails.details,
    });

    setShowResults(true);
  };

  const handleReset = () => {
    setName1("");
    setName2("");
    setGender1(null);
    setGender2(null);
    setResult(null);
    setShowResults(false);
  };

  return (
    <>
      <div className="app-container">
        <div className="content-container">
          <div className="header-container">
            <h1 className="app-title">💖 이름 궁합 테스트 💖</h1>
            <p className="app-subtitle">
              두 사람의 이름으로 특별한 궁합을 확인해보세요!
            </p>
          </div>

          <div className="main-card">
            {!showResults ? (
              <NameForm
                name1={name1}
                name2={name2}
                gender1={gender1}
                gender2={gender2}
                setName1={setName1}
                setName2={setName2}
                setGender1={setGender1}
                setGender2={setGender2}
                onCalculate={handleCalculate}
              />
            ) : (
              <div className="results-wrapper">
                <ResultDisplay
                  score={result.score}
                  message={result.message}
                  onReset={handleReset}
                />

                <QuoteDisplay quote={result.quote} />

                <CompatibilityExplanation details={result.details} />
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="disclaimer">
        해당 페이지의 결과는 참고용이며 실제랑은 다를 수 있습니다.
      </footer>
    </>
  );
};

export default App;
