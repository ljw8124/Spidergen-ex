
/**
Constructor
Do not call Function in Constructor.
*/
class pratice05App()
{
	super();

	//TODO:edit here

}
extends AApplication;


function pratice05App*onReady()
{
	super.onReady();

	
	var thisObj = this;
	
	document.addEventListener('deviceready', function()
	{
		thisObj.onDeviceReady();
	});
	//TODO:edit here

};

function cordovaSampleApp*onDeviceReady()
{
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

};

function pratice05App*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
