
//import "Framework/afc/component/APanel.js"	//loadContainer 를 사용하려면 APanel 이 필요함.
// -> 직접 import 하거나 afc에서 component 추가하면 해결

/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);
}
afc.extendsClass(MainView, AView);


//초기화가 시작될 때 호출되는 함수
MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	///url 대신 null을 셋팅하면 빈 컨테이너가 뷰 내부에 생성 -> 컨테이너 아이디는 생략 가능
	var cntr = this.naviView.loadContainer(null, 'viewCntr');
	
	//두번째 파라미터에 컨테이너를 셋팅하면 지정한 컨테이너의 내부에서 네비게이터가 작동
	var navi = new ANavigator('testNavi', cntr);
	
	navi.registerPage('Source/Views/SubView1.lay', 'SubView1');
	navi.registerPage('Source/Views/SubView2.lay', 'SubView2');
	navi.registerPage('Source/Views/SubView3.lay', 'SubView3');
	
	navi.goPage('SubView1'); //default로 실행될 subView 설정
};
