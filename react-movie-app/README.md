영화 APP만들어보기

#Router란?
Browser Router에서 URL은 보통의 웹사이트처럼 생겼음.
Hash Router는 /#/movie처럼 #이 붙음
Switch컴포넌트안에 Route를 넣어준 이유는 한번에 하나의 Route만 렌더링 하기 위해서다.

#useParams
<Route path="/movie/:id">에서 id로 변수를 보냈을때,해당 컴포넌트에서 
const x = useParams();
    console.log(x);
처럼 console.log를 찍으면
{id: '12312'}이 나옴!
