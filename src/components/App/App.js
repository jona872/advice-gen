import dice from './icon-dice.svg';

import './App.css';
import React from 'react';

function App() {
  const [advice, setAdvice] = React.useState(
    {
      id: 117,
      advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
    });

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log("🚀 ~ file: App.js ~ line 19 ~ getAdvice ~ data", data.slip)
    setAdvice(data.slip);
  }

  return (
    <main className="card">
      <p className="title"> ADVICE #{advice.id}</p>
      <p className="quote"> "{advice.advice}"</p>
      <picture>
        <source media="(max-width: 399px)" srcSet="/images/pattern-divider-mobile.svg" />
        <source media="(min-width: 400px)" srcSet="/images/pattern-divider-desktop.svg" />
        <img id="divisor" src="/images/pattern-divider-desktop.svg" aria-hidden="true" alt="" />
      </picture>

      <div className="button-wrapper">
        <div className="button" onClick={getAdvice}>
          <img src={dice} aria-hidden="true" alt="" />
        </div>
      </div>


    </main>
  );
}

export default App;
