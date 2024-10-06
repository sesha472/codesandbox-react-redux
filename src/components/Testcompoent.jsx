// import React from "react";

// const Testcompoent = () => {
//   let colurname = "Red";
//   const clickHandler = () => {
//     colurname = "blue";
//     console.log(colurname);
//   };

//   return (
//     <div>
//       <h1>{colurname}</h1>
//       <button onClick={clickHandler}>clic</button>
//     </div>
//   );
// };

// export default Testcompoent;

// import React, { useState } from "react";

// const Testcompoent = () => {
//   const [counter, setcounter] = useState(0);
//   let incrimentHAndler = () => {
//     setcounter((prvstate) => prvstate + 1);
//   };
//   let dicrementHandler = () => {
//     setcounter((prvstate) => prvstate - 1);
//   };
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={incrimentHAndler}>incriment</button>
//       <button onClick={dicrementHandler}>dicremnet</button>
//     </div>
//   );
// };

// export default Testcompoent;

// import React, { useEffect, useState } from "react";

// const Testcompoent = () => {
//   const [count, setcount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setcount((prvstate) => prvstate + 1);
//     }, 2000);
//   });

//   return (
//     <>
//       <h1>{count}</h1>

//       <div>Testcompoent</div>
//     </>
//   );
// };

// export default Testcompoent;
