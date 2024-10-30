import { LevelContext } from "./contexts/LevelContext";

/* eslint-disable react/prop-types */
export default function Section({ level, children }) {
  return (
    <>
      <section className="section">
        <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
      </section>
    </>
  );
}
