"use client";

import { createContext, useState } from "react";

type CounterContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export const CounterContext = createContext<CounterContextType | null>(null);

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}