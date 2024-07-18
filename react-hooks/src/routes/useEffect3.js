import { useEffect, useRef } from "react";

const useClick = (onclick) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onclick);
        }
    // return () => element.current.removeEventListener("click", onclick);
        return () => {
            if(element.current) {
                element.current.removeEventListener("click", onclick);
            }
        };
    }, []);
    return element;
}
function Hook7() {
    const sayHello = () => console.log("say helllo");
    const title = useClick(sayHello);
    return (
        <div className="App">
            <h1 ref={title}>Hi</h1>
        </div>
    )
}

export default Hook7;
//function을 리턴 받았다면,그 function은 componentWillUnMount로부터 호출됐다.
// return () => {
//     if(element.current) {
//         element.current.removeEventListener("click", onclick);
//     }
// };
// 여기가 실행되는것
//component가 mount 됐을때
// if (element.current) {
//     element.current.addEventListener("click", onclick);
// }
// 마지막에 []를 해주면 영원할것이고,없을땐 update 될때마다 eventListener가 추가될것이다.
// 그래서 []가 있으면 componentDidMount때 단 한번만 실행되라는 의미가 될것이다.