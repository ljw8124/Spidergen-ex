
/**
Constructor
Do not call Function in Constructor.
*/
class pratice03App()
{
	super();

	//TODO:edit here

}
extends AApplication;


function pratice03App*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here
	
};

function pratice03App*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
