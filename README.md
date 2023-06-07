# Spidergen
입사전 Spidergen 연습예제
from asoosoft

https://asoosoft.net/


------------------------------------------------------------

window 에서 data 를 받는 경우, init() 에서 this.getContainer().getData() 를 해서 넘어온 data를 받음

page 에서 data 를 받는 경우, setData(data) 함수를 선언하여, 함수 안에서 data 를 받음

tabView 에서 data 를 받는 경우, this.owner.selectedTab.data 로 data 를 받음

Spidergen 내부 컴포넌트에 이벤트 다시 호출하고 싶을 때, comp.report('event 명');
