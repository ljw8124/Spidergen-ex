
/**
Constructor
Do not call Function in Constructor.
*/
function pratice14App()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(pratice14App, AApplication);


pratice14App.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

pratice14App.prototype.unitTest = function(unitUrl)
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
	    theApp = new pratice14App();
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

