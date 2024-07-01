# React
나도 FullStack개발자가 되어보자!! React시작해보기


일단 React를 해보기 앞서
React가 왜 필요한가?
React는 UI를 Interactive하게 만들어준다.

1.일단 내가 알고 있는 바닐라JS와 ReactJS를 이용하여 비교를 해보며 비교점을 찾아보자.
1-1.버튼을 만들어 버튼을 몇번 클릭했는지 세는 어플을 만들어 비교해보자.
바닐라코드의 경우
 1.HTML 만들기
 2.JS에서 가져온다.
 3.Event를 감지한다.
 4.데이터를 업데이트해준다.

리액트의 경우
 #리액트의 규칙 중 하나는 HTML을 페이지에 직접 작성하지 않는다.
 #props안에 event listener를 등록할 수 있다.

    #JSX
    렌더링을 JSX식으로 바꿔보기
    컴포넌트식으로 바꿔서 하기
    1.반드시 대문자로 시작해야함
    2.코드를 정리해준다.
    => 쉽게 코드를 분리한 뒤 함께 렌더링

    #State
    바뀌는 데이터값들 담아주는곳
    react.html에서
    1.
    let counter = 0;
        function countUp() {
            counter = counter + 1;
            render();
        }
        function render() {
            ReactDOM.render(<Container />, root);
        }
        const Container = () => (
            <div>
                <h3>Total Clicks: {counter}</h3>
                <button onClick={countUp}>Click me</button>
            </div>
        );
        render();
    해당 코드는 일단 렌더링을 해주고 버튼이 클릭시 counter값을 리랜더링 해줌.
    우리가 여라가지 요소들을 리렌더링 하려고 해도,전부 다 새로 생성되지 않고
    오로지 바뀐부분만 생성이됨! 이것이 바로 리액트다!
    하지만 해당 1의 방식은 계속해서 render해주는걸 잊으면 안되기에 최고의 방법이 아니다!
    
    2.
        const data = React.useState();를 생성 후 
        console.log(data);
        를 해보면 (2) [undefined,f]를 볼 수 있다.
        #undefined : data
        #f : data를 바꿀때 사용하는 함수
        let counter = 0;
            function countUp() {
                counter = count + 1;
            }
        의 코드와
        const data = React.useState(0);
        는 같은 역할이다.
        물론 결과는 같지만 우린 리액트를 사용하는 만큼 리액트의 룰을 지키면서 하는게 좋다.
        변수를 컴포넌트에 연결하여 변수에 데이터를 담은(counter) 다음 -> 해당 변수에 담긴 값을 변경(setCounter)
    
    


비교점
 -바닐라JS에선 HTML을 먼저 만들고,그걸 JS로 가져와서 HTML을 수정해주는식이면
 리액트에선 JS로 시작해서 그 다음 HTML이 된다.이것이 React의 핵심!!
 -리액트의 경우 유저에게 보여질 내용을 컨트롤 할 수 있다. React의 핵심!!!