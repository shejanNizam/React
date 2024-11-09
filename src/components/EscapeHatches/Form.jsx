import { useRef } from "react";

export default function Form() {
  let inputRef = useRef(null);

  const handleClickFocus = () => {
    console.log("clicked");
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClickFocus}>Focus the input</button>
    </>
  );
}
