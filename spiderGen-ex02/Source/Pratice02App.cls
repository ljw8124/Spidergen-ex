
/**
Constructor
Do not call Function in Constructor.
*/
class Pratice02App()
{
	super();

	//TODO:edit here

}
extends AApplication;


function Pratice02App*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/TestTabView.lay');

	//TODO:edit here

};

function Pratice02App*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
