# wanted_pre_onboarding

# Toggle

app.js에서 토글을 선택시 onChange와 toggled를 Toggele 컴포넌트에 전달
setToggled을 통해 Toggle 상태를 변경하였고 Toggle 체크 되었을때 on/off를 표시해주었습니다.
CSS 코드를 상대적으로 줄여보고 싶어 styled-components를 사용하였습니다.

처음 사용해보는 styled-component에 처음에 약간 애먹었습니다.
토글 버튼이 움직이는것과 동시에 뒷배경이 차오르게 하는 부분에서 어려웠지만
label테그로 같은 기능들을 묶고 각각의 테그들을 연동 시켜 해결 하였습니다.

# Modal

Open Modal버튼을 누르면
onclick을 통해 setOpend State가 true로 변경이 된다.
이 state를 Modal 컴포넌트에 Open과 모달창을 닫는 function close를 전달하여
modal창이 열렸을때 x 버튼을 눌러 setOpened 통해 opened의 state를 변경하여 창을 닫아 준다.

다항 연산자를 이용하여 className을 통해 open 상태를 체크 하였습니다.
styled-component로 css를 짜기에는 중복되어 작성 해야 할 것 같아
일반 CSS를 사용 하였는데 다시 시간이 있다면 로직을 수정하여 styled-component를 사용 해보고 싶습니다.
CSS부분의 화면 레이아웃을 잡는데 시간을 많이 잡아 먹어 어려움이 있었습니다.

# Tab

파일 구조가 복잡해지는 것이 싫어 app.js에 버튼을 등록하여 tab을 구현했는데
app.js에 기능들이 들어가게되어 컴포넌트 단위로 구성하는 react를 잘 이용하지 못했나 생각이 들었습니다.

first, second, third 버튼을 통해 각각의 텝이 선택되었을때 탭버튼의 배경색을 변경 시켰으며
활성화된 탭을 누르면 onClick을 통해 setActive에 활성화된 tab을 넣어 주었으며
tab 컴포넌트에 활성화된 텝을 넘겨주어 다항연산자를 사용하여 텝을 활성화 시켜 주었습니다.

# Tag

Tag 컴포넌트에 tag를 만들기 위한 배열 tags와 addTag, deleteTag, 기능을 감싼 div테그 테두리를 활성화를 위해 id에 테그 아이디를 activeTag 값을 넣어 활성화 상태를 업데이트 해주는 tag를 전달 해준다.

useEffect 를 사용하여 마우스 선택시 테그의 id를 받아 input 테그를 선택시 감싸는 div테그를 활성화 시켜주고 다른 곳을 선택했을 때는 id를 삭제하여 활성화 상태를 없애준다.

typing 할때 onChange를 통해 changeHandler를 불러 typing 값에 input테그에 쓴 값을 변경 시켜 주면서
tag를 추가 할때 typing 값을 전달하여 addTag를 해준다.
엔터를 누를때 추가를 하도록 코드를 짰는데 공백 Tag가 생성되는 오류가 발생하여
input테그의 내용과 활성화된 div id를 공백으로 초기화 시켜 주었습니다.

# Click to Edit

이름과 나이의 input 테그에 내용을 넣고 click Edit 내부에서 클릭하면 내용이 하단의 문단에 들어가게 된다.

나이와 이름을 받아오기위해서 Dom요소에 직접 접근할 수 있는 Ref를 사용하여 name 과 age값을 받아와 문단에 전달 하였습니다.

useEffect 를 사용하여 마우스 선택시 테그의 id를 받아 input 밖 요소를 선택할때 inputAgeRef, inputNameRef 의 값을 불러와 print함수에 값을 전달하여 setClickName, setClickAge로 각 값의 State를 업데이트 해주었습니다.
