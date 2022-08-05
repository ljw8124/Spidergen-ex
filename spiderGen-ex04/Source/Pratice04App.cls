
/**
Constructor
Do not call Function in Constructor.
*/
class Pratice04App()
{
	super();

	//TODO:edit here
	
	//express 기본 포트는 3000
	this.serverUrl = 'http://localhost:3000/users/';	
	
	//qm은 queryManager
	this.qm = null;

}
extends AApplication;


function Pratice04App*onReady()
{
	super.onReady();
	
	var navigator = new ANavigator();
	navigator.registerPage('Source/MainView.lay', 'MainView');
	navigator.goPage('MainView');
	
	//or
	
/*
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');
*/
	//TODO:edit here
	this.connectServer();

};

function Pratice04App*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};

function Pratice04App*connectServer()
{
	this.qm = new WebQueryManager();
	
	var nio = new HttpIO(this.qm);
	this.qm.setNetworkIo(nio);
	
	this.qm.startManager(this.serverUrl);
};
