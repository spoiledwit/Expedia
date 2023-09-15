// "use client";

// import { useState } from "react";
// import { createContext } from "vm";

// const BackgroundColor = createContext()

// export default function BackgroundColorProvider({
//   children,
// }: {
//   children: JSX.Element;
// }) {

//     const [color, setColor] = useState('#fff')

//   return (
//     <BackgroundColor.Provider value={{color}}>
//         <div
//       className={`w-full transition flex flex-col`}
//       style={{
//         scrollBehavior: "smooth",
//         transitionDuration: "1s",
//         backgroundColor: color,
//       }}
//     >
//       {children}
//     </div>
//     </BackgroundColor.Provider>
//   );
// }
