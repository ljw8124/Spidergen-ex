# SpiderGen 내가 쓰려고 모은 usage

### 데이터 넘겨받기
* window 에서 data 를 받는 경우, init() 에서 this.getContainer().getData() 를 해서 넘어온 data를 받음

* page 에서 data 를 받는 경우, setData(data) 함수를 선언하여, 함수 안에서 data 를 받음

* tabView 에서 data 를 받는 경우, this.owner.selectedTab.data 로 data 를 받음

### 이벤트 재 호출
Spidergen 내부 컴포넌트에 이벤트 다시 호출하고 싶을 때, comp.reportEvnet('event 명', 'info', 'e');

### PivotGrid
pivotGrid 에서는 데이터 삽입위해서 pivotGird.addRow(0, 0) 와 같이 파라미터를 두번 던져야함(헤더와 바디 느낌) 또한 setRow 할때에도, pivotGrid.setRow('index', '헤더데이터', '바디데이터') 형식으로 넣어야한다.

### dot 이미지와 줄바꿈 하는 코드! -> 
```css
.text_dot
{
	padding-left: 14px;
}

.text_dot::before
{
	content: "";
	width: 4px;
	height: 4px;
	position: absolute;
	top: 10px;
	left: 5px;
	background-color: #656A71;
	border-radius: 2px;
}
```

### 스파이더젠 local webserver 프론트 소스 들어가야할 경로

Spidergen경로\resources\app\bin\Runner\SpiderServer\public</br>

웹 에서 스크롤 모양 변경하기 위한 라이브러리 ===> scrollIndicator</br>

### 웹서버와 연동
* 아파치와 연동하는 경우, httpd.conf 에서 화면소스가 위치한 디렉토리 지정 필요
* Nodejs 에서 연동하는 경우, app.js 에서 아래와 같은 방식으로 연동 필요
```js
app.use(express.static(path.join(__dirname, 'public')));
```


### 쿼리 처리 비동기로 하는 방식
```js
// 이 때 Promise 로 받으므로 await 으로 받던지, then() 을 이용하든지 사용가능
function sendQuery() {
	return new Promise((resolve, reject) => {
		queryManager.sendProcessByName('queryName', 'container', null,
			(queryData) => {
				// InBlock 처리
			},
			(queryData) => {
				// OutBlock 으로결과 받기

				// 성공시
				if(OutBlock) {
					resolve(OutBlock);
				} else {
					reject()
				}
			});
	})
}
```

스파이더젠에서 디폴트로 설정된 style 을 수정하기 위해서는, 원본 파일을 건드는 것이 아니라 해당 프로젝트 global.stl 에서 변경하고 싶은 컴포넌트의 css 를 복사하여 덮어쓰기 형식으로 작성하면 됨

```js
// 커스텀마스킹 작성방법
ADataMask.customMsk.appvMask = {
	title: '넣을타이틀',
	param: [],
	func: function appvMask(value, param, ele) {
		if(value)
		{			
			let returnText = '';
			switch(value) {
				case '0':
					returnText = 'value값';
					break;
				case '1':
					returnText = 'value값';
					break;
				case '8':
					returnText = 'value값';
					break;
				case '9':
					returnText = 'value값';
					break;
			}
			
			return returnText;
		}
	}
}
```

### DropBox/SelectBox image 넣기
- DropBox 의 경우 :span 으로 찾아가서 background-image 넣어주어야함.
- selectBox 의 경우 그냥 background-image 넣어주면됨

### DataGrid 
```css
/*헤더 색 반영*/
.theme_dataGrid .grid-header-table td
{
	background-color : #FFFFFF;
}

/*select 시 색상*/
.theme_dataGrid .grid-body-table tbody td.agrid_select
{
	background-color: #1D6CF1;
	color: #FFFFFF;
}
```
### DateGrid 배경색
main grid 의 width 를 절대값으로 주는 경우 그 보다 넘어가면, view 의 default 색을 보여주게 되는데, 이 때 이걸 막는 임시방법은,</br>
전역에서 DateGrid .AView-Style 에 background-color: transparent 주는 것이다.</br>

DataGrid 에서 insertRow 시 {text: ''} 식으로 넣음.. filter 의 경우에 updatePosition 자동으로 해줌

### Date Picker css 적용
현재로서는 코드로 css 를 구현하기 때문에, 하위로 찾아가서 input 에 background-image 를 넣어주어야 함

### Grid 컬럼만 변경하고 싶은 경우,
```css
.grid_type01 td:nth-child(2n) /*2n 은 짝수 컬럼, 2n + 1 은 홀수 컬럼*/
{
	/*설정할 색깔*/
}
```


