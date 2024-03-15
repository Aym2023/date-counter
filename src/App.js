import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCounter] = useState(0);
  function handelReset() {
    setStep(1);
    setCounter(0);
  }

  const date = new Date("12 March 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="step">
        {/* <button onClick={() => setStep((c)=> step-1) + {date}}>-</button>
        <span> Step {step}: </span>
        <button onClick={() => setStep((c)=> step+ 1) + {date}}>+</button> */}

        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> Step {step}: </span>
      </div>

      <div>
        <button onClick={() => setCounter((c) => count - step) + { date }}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={() => setCounter((c) => count + step) + { date }}>
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago from today `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {step !== 1 || count !== 0 ? (
        <div>
          <button onClick={handelReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
