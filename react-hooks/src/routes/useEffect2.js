import { useRef } from "react";

function Hook6() {
    const input = useRef();
    setTimeout(() => input.current.focus(), 5000);
    return (
        <div className="App">
            <div>Hi</div>
            <input ref={input} placeholder="la"/>
        </div>
    )
}

export default Hook6;