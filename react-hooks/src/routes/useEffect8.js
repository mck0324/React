// import { useState, useEffect } from "react";

// const useNetwork = onChange => {
//     const [status, setStatus] = useState(navigator.onLine);
//     const handleChange = () => {
//         // if (typeof onChange === "function") {
//         //     onChange(navigator.onLine);
//         // }
//         setStatus(navigator.onLine);
//     };
//     useEffect(() => {
//         window.addEventListener("online", handleChange);
//         window.addEventListener("offline", handleChange);
//         () => {
//             window.removeEventListener("online", handleChange);
//             window.removeEventListener("offline", handleChange);
//         }
//     }, []);
//     return status;
// };
// function Hook12() {
//     const onLine = useNetwork();
//     return (
//         <div className="App">
//             <h1>{onLine ? "OnLine" : "Offline"}</h1>
//         </div>
//     )
// }
// export default Hook12;