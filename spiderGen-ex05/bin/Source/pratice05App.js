
/**
Constructor
Do not call Function in Constructor.
*/
function pratice05App()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(pratice05App, AApplication);


pratice05App.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	
	var thisObj = this;
	
	document.addEventListener('deviceready', function()
	{
		thisObj.onDeviceReady();
	});
	//TODO:edit here

};

pratice05App.prototype.onDeviceReady = function()
{
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

};

pratice05App.prototype.unitTest = function(unitUrl)
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
	    theApp = new pratice05App();
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

