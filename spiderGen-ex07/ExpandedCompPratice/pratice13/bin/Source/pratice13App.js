
/**
Constructor
Do not call Function in Constructor.

기본 라이브러리를 Framework/afc 의 Default Load Settings 로 설정
*/
function pratice13App()
{
	AApplication.call(this);
}
afc.extendsClass(pratice13App, AApplication);


pratice13App.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	/*
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');
	*/
	
	//페이지가 변경되면 MainView 위에 로드되는 것이 아니라 바로 이동한 페이지가 MainView 처럼 보임
	var navigator = new ANavigator();
	navigator.registerPage('Source/MainView.lay', 'MainView');
	navigator.registerPage('Source/DnDSampleView.lay', 'DnDSampleView');
	navigator.registerPage('Source/AnimaSampleView.lay', 'AnimaSampleView');
	navigator.registerPage('Source/ScrollManagerSampleView.lay', 'ScrollManagerSampleView');
	navigator.registerPage('Source/BackupManagerSampleView.lay', 'BackupManagerSampleView');
	navigator.registerPage('Source/ResponsiveSampleView.lay', 'ResponsiveSampleView');
	navigator.registerPage('Source/RBMSampleView.lay', 'RBMSampleView');
	
	navigator.goPage('MainView'); //default 페이지는 MainView
};

pratice13App.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};

var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new pratice13App();
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

