
/**
Constructor
Do not call Function in Constructor.
*/
function Pratice04App()
{
	AApplication.call(this);

	//TODO:edit here
	
	//express 기본 포트는 3000
	this.serverUrl = 'http://localhost:3000/users/';	
	
	//qm은 queryManager
	this.qm = null;

}
afc.extendsClass(Pratice04App, AApplication);


Pratice04App.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);
	
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

Pratice04App.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};

Pratice04App.prototype.connectServer = function()
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
	    theApp = new Pratice04App();
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

