
/**
Constructor
Do not call Function in Constructor.

기본 라이브러리를 Framework/afc 의 Default Load Settings 로 설정
*/
class pratice13App()
{
	super();
}
extends AApplication;


function pratice13App*onReady()
{
	super.onReady();

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

function pratice13App*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
