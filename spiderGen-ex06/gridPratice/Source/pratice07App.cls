
/**
Constructor
Do not call Function in Constructor.
*/
class pratice07App()
{
	super();

	//TODO:edit here

}
extends AApplication;


function pratice07App*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/Views/MainView.lay');

	//TODO:edit here

};

/*
function pratice07App*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
*/
