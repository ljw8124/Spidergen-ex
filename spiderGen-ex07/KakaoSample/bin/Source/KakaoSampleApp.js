afc.loadScript("Framework/afc/component/AApplication.js");
afc.loadScript("Framework/afc/component/APage.js");
/**
Constructor
Do not call Function in Constructor.
*/
function KakaoSampleApp()
{
	AApplication.call(this);

	this.serverUrl = 'http://localhost:3000/users/';
	
	this.qm = null;

}
afc.extendsClass(KakaoSampleApp, AApplication);


KakaoSampleApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);
	
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
KakaoSampleApp.prototype.connectServer = function()
{
	this.qm = new WebQueryManager();
	
	var nio = new HttpIO(this.qm);
	this.qm.setNetworkIo(nio);
	
	this.qm.startManager(this.serverUrl);
	
};

var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new KakaoSampleApp();
	    theApp.isLoadTheme = false;
        if(PROJECT_OPTION.unitUrl) theApp.unitTest(PROJECT_OPTION.unitUrl);
        else theApp.onReady();
    });
};

if(!AApplication.manualStart)
{
    $(document).ready(function()
    {
        AApplication.start();
    });
}
else if(AApplication.manualStart == 2)
{
    AApplication.start();
}

