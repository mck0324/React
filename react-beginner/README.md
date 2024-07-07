React를 작업할때 포인트는 "분할하고"! "정복"이 핵심!!!


Css적용 
1.style.css를 만들어 index.js에서 import
=> 해당 방법은 예를들어 버튼을 만든다했을때 모든 버튼들의 배경색을 지정해놓은 색상이 됨
2. props를 통한 style={{}} 또는 css를 모듈화시켜 Button.module.css,App.module.css를 이용하여 className={style.title} 이런식으로 하는게 좋으!

#create-react-app은 컴포넌트들이나 스타일들을 독립적이게 유지시켜준다!!!


#UseEffect -> component를 처음 딱 한번만 실행되고 다시는 실행되지 않도록 하는 방법을 만들어보자.
state가 변화하든,무슨 일이 일어나든 코드가 단 한번만 실행됨.