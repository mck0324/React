React를 작업할때 포인트는 "분할하고"! "정복"이 핵심!!!


Css적용 
1.style.css를 만들어 index.js에서 import
=> 해당 방법은 예를들어 버튼을 만든다했을때 모든 버튼들의 배경색을 지정해놓은 색상이 됨
2. props를 통한 style={{}} 또는 css를 모듈화시켜 Button.module.css,App.module.css를 이용하여 className={style.title} 이런식으로 하는게 좋으!

#create-react-app은 컴포넌트들이나 스타일들을 독립적이게 유지시켜준다!!!


#UseEffect -> component를 처음 딱 한번만 실행되고 다시는 실행되지 않도록 하는 방법을 만들어보자.
state가 변화하든,무슨 일이 일어나든 코드가 단 한번만 실행됨.
사용이유:특정 변화시 원하는 코드들만 실행할 수 있기 위해!

ex)페이지 랜더시 click에 대한 console.log()가 발생.그리고 검색창이 존재.
검색타이핑시 click에 대한 console.log()와 검색창 타이핑되는 console.log()가 동시에 나오며,타이핑이 완료 되었을떄도 click시 계속 남는다. -> 우리는 검색키워드 타이핑 완료하고 원하는 검색을 하고 싶을뿐,버튼을 누르거나 했을때 검색을 하고 싶지 않음