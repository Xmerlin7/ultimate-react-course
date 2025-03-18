import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const App = () => {
  const [step, setStep] = useState(1);
  const [isOPen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <>
      {isOPen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step{step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "fff" }}
              onClick={handlePrev}
            >
              {" "}
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      <button className="close" onClick={() => setIsOpen(!isOPen)}>
        &times;
      </button>
    </>
  );
};

export default App;
