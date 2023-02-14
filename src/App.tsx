import { useState, useEffect } from 'react';
import useWindowDimensions from './useWindowDimensions';
import { PatternDividerDesktop, PatternDividerMobile, DiceIcon } from './Icons';

type TAdvice = {
  id: number;
  advice: string;
};

function App() {
  const [advice, setAdvice] = useState<TAdvice | null>();

  const width = useWindowDimensions();

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
      <div className="relative flex max-w-xs flex-col items-center rounded-xl bg-_dark-grayish-blue px-12 pt-12 pb-16 shadow-xl desktop:max-w-xl">
        <h1 className="text-xs uppercase tracking-widest text-_neon-green desktop:text-sm">
          Advice #{advice?.id}
        </h1>

        <q className="py-8 text-center text-[22px] font-bold leading-8 text-_light-cyan desktop:text-[28px] desktop:leading-9">
          {advice?.advice}
        </q>

        {width >= 1440 ? <PatternDividerDesktop /> : <PatternDividerMobile />}
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
