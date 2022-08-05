import 'Framework/afc/component/AApplication.js'
import 'Framework/afc/component/APage.js'
/**
Constructor
Do not call Function in Constructor.
*/
class KakaoSampleApp()
{
	super();

	this.serverUrl = 'http://localhost:3000/users/';
	
	this.qm = null;

}
extends AApplication;


function KakaoSampleApp*onReady()
{
	super.onReady();
	
	//두번째 파라미터에 컨테이너를 셋팅하면 지정한 컨테이너의 내부에서 네비게이터가 작동
	//null을 셋팅하거나 생략하면 메인컨테이너가 default가 되어 네비게이터 작동
	var navigator = new ANavigator('kakaoNavi', null);

	navigator.registerPage('Source/MainView1.lay', 'MainView1');
	navigator.registerPage('Source/MainView2.lay', 'MainView2');
	
	navigator.goPage('MainView1');
	
	this.connectServer();

	/*
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');
	*/

	//TODO:edit here

};

//WebQueryManager와 WebQueryData 임포트 필요
function KakaoSampleApp*connectServer()
{
	this.qm = new WebQueryManager();
	
	var nio = new HttpIO(this.qm);
	this.qm.setNetworkIo(nio);
	
	this.qm.startManager(this.serverUrl);
	
};
