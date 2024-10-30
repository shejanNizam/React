import { useContext } from "react";
import { LevelContext } from "./contexts/LevelContext";

/* eslint-disable react/prop-types */
export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <>
      <section className="section">
        <LevelContext.Provider value={level + 1}>
          {children}
        </LevelContext.Provider>
      </section>
    </>
  );
}
