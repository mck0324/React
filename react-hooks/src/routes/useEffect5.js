const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrev = () => window.addEventListener("beforeunload",listener);
    const disablePrev = () => window.removeEventListener("beforeunload",listener);
    return { enablePrev, disablePrev }

}
function Hook9() {
    const {enablePrev, disablePrev} = usePreventLeave();
    return (
        <div className="App">
            <button onClick={enablePrev}>Protect</button>
            <button onClick={disablePrev}>Unprotect</button>
        </div>
    )
}
export default Hook9; 