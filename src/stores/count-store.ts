import create from 'zustand';

interface CountState {
  value: number
  increment: () => void
  decrement: () => void
};

export const useCountStore = create<CountState>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
}));
