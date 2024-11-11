import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <>
      <h2>MyComponent</h2>
    </>
  );
}
