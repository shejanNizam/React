// // adding to an array ----------------

// import { useState } from "react";

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           setArtists([...artists, { id: nextId++, name: name }]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// // removing from an array-------------

// import { useState } from "react";

// let initialArtists = [
//   { id: 0, name: "Marta Colvin Andrade" },
//   { id: 1, name: "Lamidi Olonade Fakeye" },
//   { id: 2, name: "Louise Nevelson" },
// ];

// export default function List() {
//   const [artists, setArtists] = useState(initialArtists);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>
//             {artist.name}{" "}
//             <button
//               onClick={() => {
//                 setArtists(artists.filter((a) => a.id !== artist.id));
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// // Transforming an array
// import { useState } from "react";

// let initialShapes = [
//   { id: 0, type: "circle", x: 50, y: 100 },
//   { id: 1, type: "square", x: 150, y: 100 },
//   { id: 2, type: "circle", x: 250, y: 100 },
// ];

// export default function ShapeEditor() {
//   const [shapes, setShapes] = useState(initialShapes);

//   function handleClick() {
//     const nextShapes = shapes.map((shape) => {
//       if (shape.type === "square") {
//         // No change
//         return shape;
//       } else {
//         // Return a new circle 50px below
//         return {
//           ...shape,
//           y: shape.y + 50,
//         };
//       }
//     });
//     // Re-render with the new array
//     setShapes(nextShapes);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Move circles down!</button>
//       {shapes.map((shape) => (
//         <div
//           key={shape.id}
//           style={{
//             background: "purple",
//             position: "absolute",
//             left: shape.x,
//             top: shape.y,
//             borderRadius: shape.type === "circle" ? "50%" : "",
//             width: 20,
//             height: 20,
//           }}
//         />
//       ))}
//     </>
//   );
// }

// // Replaceing items an array
// import { useState } from "react";

// let initialCounters = [0, 0, 0];

// export default function CounterList() {
//   const [counters, setCounters] = useState(initialCounters);

//   function handleIncrementClick(index) {
//     const nextCounters = counters.map((c, i) => {
//       if (i === index) {
//         // Increment the clicked counter
//         return c + 1;
//       } else {
//         // The rest haven't changed
//         return c;
//       }
//     });
//     setCounters(nextCounters);
//   }

//   return (
//     <ul>
//       {counters.map((counter, i) => (
//         <li key={i}>
//           {counter}
//           <button
//             onClick={() => {
//               handleIncrementClick(i);
//             }}
//           >
//             +1
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// // inserting into an array
// import { useState } from "react";

// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: "Marta Colvin Andrade" },
//   { id: 1, name: "Lamidi Olonade Fakeye" },
//   { id: 2, name: "Louise Nevelson" },
// ];

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState(initialArtists);

//   function handleClick() {
//     const insertAt = 1; // Could be any index
//     const nextArtists = [
//       // Items before the insertion point:
//       ...artists.slice(0, insertAt),
//       // New item:
//       { id: nextId++, name: name },
//       // Items after the insertion point:
//       ...artists.slice(insertAt),
//     ];
//     setArtists(nextArtists);
//     setName("");
//   }

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={handleClick}>Insert</button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// update objects inside an array
