import 'Framework/afc/component/AApplication.js'
import 'Framework/afc/component/APage.js'


/**
Constructor
Do not call Function in Constructor.
*/
class homepageApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function homepageApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');
};
