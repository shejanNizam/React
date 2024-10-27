// import { useState } from "react";

// export default function Form() {
//   const [to, setTo] = useState("Alice");
//   const [message, setMessage] = useState("Hello");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 5000);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:{" "}
//         <select value={to} onChange={(e) => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
<br />;
<br />;
//       <br />
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <br />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <br />
      <br />
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <br />
      <br />
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <br />
      <br />
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <br />
      <br />
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
