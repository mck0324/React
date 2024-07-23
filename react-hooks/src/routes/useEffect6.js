import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    // if (typeof onBefore !== "function") {
    //     return;
    // }
    const handle = (event) => {
        console.log(event);
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
}

function Hook10() {
    const begForLife = () => console.log("Pls don't leave");
    useBeforeLeave(begForLife);
    return (
        <div className="App">
            <h1>Hi</h1>
        </div>
    )
}
export default Hook10; 