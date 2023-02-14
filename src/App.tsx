import { useState, useEffect } from 'react';
import { PatternDividerDesktop, PatternDividerMobile, DiceIcon } from './Icons';

type TAdvice = {
  id: number;
  advice: string;
};

function App() {
  const [advice, setAdvice] = useState<TAdvice | null>();

  async function getAdvice() {
    const adviceUrl = 'https://api.adviceslip.com/advice';
    try {
      const res = await fetch(adviceUrl);
      const data = await res.json();
      setAdvice(data.slip);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main className="relative grid min-h-screen place-content-center">
      <div className="relative flex max-w-xl flex-col items-center rounded-xl bg-_dark-grayish-blue px-12 pt-12 pb-20 shadow-xl">
        <p className="text-sm uppercase tracking-widest text-_neon-green">
          Advice #{advice?.id}
        </p>

        <q className="py-8 text-center text-[28px] font-bold text-_light-cyan">
          {advice?.advice}
        </q>

        <PatternDividerDesktop />
        <button
          onClick={() => getAdvice()}
          className="absolute bottom-0 translate-y-1/2 rounded-full bg-_neon-green p-5 hover:shadow-glow"
        >
          <DiceIcon />
        </button>
      </div>
      <Attribution />
    </main>
  );
}

const Attribution = () => {
  return (
    <div className="absolute bottom-4 w-full text-center text-xs text-_light-cyan">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="text-blue-500"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://www.frontendmentor.io/profile/orphandeity"
        className="text-blue-500"
      >
        Jeff R Williams
      </a>
      .
    </div>
  );
};

export default App;
