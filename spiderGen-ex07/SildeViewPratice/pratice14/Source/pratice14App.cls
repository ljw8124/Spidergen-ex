
/**
Constructor
Do not call Function in Constructor.
*/
class pratice14App()
{
	super();

	//TODO:edit here

}
extends AApplication;


function pratice14App*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function pratice14App*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
