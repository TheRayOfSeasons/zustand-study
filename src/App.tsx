import { useMemo } from 'react';
import { useCountStore } from './stores/count-store';

function App() {
  const value = useCountStore((state) => state.value);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);

  const digitCount = useMemo(() => value.toString().length, [value]);

  return (
    <div className="h-screen w-full flex flex-row justify-center items-center">
      <div className="min-w-[30rem]">
        <h1 className="text-3xl font-bold text-center">Counter</h1>
        <div className="mt-24">
          <h1 className="text-[20rem] font-bold text-center">{value}</h1>
          <h3 className="text-xl font-bold text-center mt-4">{digitCount}</h3>
          <div className="flex flex-row justify-between mt-24">
            <button
              className="text-2xl p-4 border border-black hover:bg-gray"
              onClick={() => decrement()}
            >
              - Decrement
            </button>
            <button
              className="text-2xl p-4 border border-black hover:bg-gray"
              onClick={() => increment()}
            >
              + Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
