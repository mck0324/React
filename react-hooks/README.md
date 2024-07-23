실전형 React Hooks를 연습해보자!!

Hook이란?
React의 State Machine에 연결하는 기본적인 방법이다.
Hooks가 생기기전에는 우리는 state를 함수형 컴포넌트에 사용할 수 없었다.
우리가 state를 가지고 작업을 하고 싶으면 Class 컴포넌트 형태로 만들었어야했음
Class Component는 this와 같은 문장 규칙과 Render와 같은 사용하는 방법을 고려해야하지만!
!!!!!!!!!!Hooks를 사용한다면 위에 이런걸 고려하지 않아도 됨!!
Hooks를 사용함을써 코드 길이가 상당히 줄어듬!!

#useInput
다른 function에서 이벤트를 처리 할 수 있기문에 혁신적이다!


#useTabs
useState를 이용 => 가장핵심은 setState는 모든걸 새로고침해준다!!! => Re-render

#useEffect(a,b)
useEffect는 ComponentDidMount, ComponentWillUnMount,ComponentDidUpdate
가장 핵심!!!!
a는 function으로서의 Effect
b는 Deps가 있다면 effectsms (deps)리스트에 있는 값일때만 값이 변하도록 활성화
#ComponentWillUpdate
useEffect(sayHello,[number]);
sayHello를 component가 mount 되었을때 실행시키고,number가 바뀔때만 실행
만약 컴포넌트가 mount되었을때 실행시키고 그리고나서 어떤 경우에도 실행시키고 싶지 않다면!
useEffect(sayHello,[]);
#ComponentWillUnMount
두번째 인자를 [] 빈배열로 보내주면 됨
그럼 무슨 변화가 일어났던, 누가 변화를 주던 상관없이 한번만 실행됨!

#useRef
reference는 기본적으로 우리의 컴포넌트의 어떤 부분을 선택할 수 있는 방법


#usePreventLeave,useConfirm은 useEffect,useState가 아니기에 Hooks가 아님!
 
#useBeforeLeave
기본적으로 탭을 닫을때 실행되는 function => mouse가 페이지를 벗어나면 function 실행

#useNetWork
useNetWork는 navigator가 online 또는 offline이 되는걸 막아줌