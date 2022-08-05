afc.loadScript("Framework/afc/component/AApplication.js");
afc.loadScript("Framework/afc/component/APage.js");


/**
Constructor
Do not call Function in Constructor.
*/
function homepageApp()
{
	AApplication.call(this);

	//TODO:edit here

}
afc.extendsClass(homepageApp, AApplication);


homepageApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');
};

var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new homepageApp();
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

