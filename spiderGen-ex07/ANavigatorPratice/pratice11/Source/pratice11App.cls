
//afc에서 없는 component에서는 따로 js 파일을 임포트해야함 -> save시 import
import "Framework/afc/component/AApplication.js"
import "Framework/afc/component/APage.js"
import "Framework/afc/component/ANavigator.js"

/**
Constructor
Do not call Function in Constructor.
*/
class pratice11App()
{
	super();
}
extends AApplication;


function pratice11App*onReady()
{
	super.onReady();

	//두가지 방법으로 사용 가능
	//isMainNavi 값을 true, false로 변경하여 다음 두가지 경우를 테스트 가능
	var isMainNavi = true;

	//응용프로그램 전체를 네비게이터 방식으로 동작하게 하는 경우
	if(isMainNavi)
	//isMainNavi가 true 인 경우 MainView가 Load 되지 않고 바로 SubView가 로드됨
	{
		//두번째 파라미터에 컨테이너를 셋팅하면 지정한 컨테이너의 내부에서 네비게이터가 작동
		//null을 셋팅하거나 생략하게 되면 메인컨테이너에서 네비게이터가 작동
		var navigator = new ANavigator('testNavi', null);
		
		navigator.registerPage('Source/Views/SubView1.lay', 'SubView1');
		navigator.registerPage('Source/Views/SubView2.lay', 'SubView2');
		navigator.registerPage('Source/Views/SubView3.lay', 'SubView3');
		
		navigator.goPage('SubView1');
	}
	//or
	
	//기본 메인 컨테이너 셋팅 후,
	//화면의 특정 영역에서 네비게이터를 사용하는 경우, Soucre/MainView.cls 소스 참조
	else
	//isMainNavi가 false 인 경우 MainView 가 로드되어 그 안 navi 부분에 SubView가 로드됨
	{
		this.setMainContainer(new APage('main'));
		
		this.mainContainer.open('Source/MainView.lay');	
	}
};

