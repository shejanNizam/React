import { useState } from "react";
// typing , submitting, success

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "dhaka";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  const [status, setStatus] = useState("typing");

  const handleTextChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };

  if (status === "success") {
    return <h1>Thats right!</h1>;
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer === "" || status === "submitting"}>
          Submit
        </button>

        {error && (
          <p className="Error">Good guess but a wrong answer. Try again!</p>
        )}
        {status === "submitting" && <p> Loading... </p>}
      </form>
    </>
  );
}
