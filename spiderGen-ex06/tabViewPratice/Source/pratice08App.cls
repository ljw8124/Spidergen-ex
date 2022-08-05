
/**
Constructor
Do not call Function in Constructor.
*/
class pratice08App()
{
	super();

	//TODO:edit here

}
extends AApplication;


function pratice08App*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/Views/MainView.lay'); //MainView 경로 설정 중요
	
};

/*
function pratice08App*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
*/
