
/**
Constructor
Do not call Function in Constructor.
*/
class Pratice01App()
{
	super();

	//TODO:edit here

}
extends AApplication;


function Pratice01App*onReady()
{
	super.onReady();

	//PC용 프레임워크
	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/TestFlexLayout.lay');

	//TODO:edit here

};

function Pratice01App*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
